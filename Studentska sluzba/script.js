const students = [
    {
        id: 1,
        firstName: 'Test',
        lastName: 'Test',
        gender: 'male',
        years: 22,
        city: 'Mostar',
        grades: [
            {
                grade: 10,
                subject: 'Programiranje'
            },
            {
                grade: 7,
                subject: 'Matematika'
            }
        ]
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        years: 20,
        city: 'Sarajevo',
        grades: [
            {
                grade: 9,
                subject: 'Programiranje'
            },
            {
                grade: 7,
                subject: 'Sigurnost'
            }
        ]
    },
    {
        id: 3,
        firstName: 'Niko',
        lastName: 'Nikic',
        gender: 'female',
        years: 20,
        city: 'Mostar',
        grades: [
            {
                grade: 10,
                subject: 'Programiranje'
            },
        ]
    }
];

let columns = [
    'id',
    'firstName',
    'lastName',
    'years',
    'gender',
    'city'
];

let editStudentId = null; // Ovo polje ce biti popunjeno samo ako je edit studenta aktivan

const tableBody = document.querySelector('.table tbody');// fetch <tbody></tbody> so we can append rows to it

function getStudentID() {
    return students.length + 1;
}

function editStudent(student) {
    otvoriModal();

    // popuni formu sa podacima studenta kojeg zelimo editirati
    document.getElementById('ime').value = student.firstName;
    document.getElementById('prezime').value = student.lastName;
    document.getElementById('godine').value = student.years;
    document.getElementById('spol').value = student.gender;
    document.getElementById('mjesto').value = student.city;
    editStudentId = student.id;
}

function createNewStudentRow(student) {
    const createdRow = document.createElement('tr');

    let cells = columns.map(column => {
        let cell = document.createElement('td');
        cell.innerText = student[column];
        return cell;
    });

    // EDIT Akcija cell
    let cell = document.createElement('td');
    let button = document.createElement('button');
    button.innerText = 'Edit';
    button.onclick = function () {
        editStudent(student);
    }
    cell.appendChild(button);
    cells.push(cell);
    // EDIT Akcija cell END

    createdRow.append(...cells);

    tableBody.appendChild(createdRow);
}

function updateStudent(student) {
    editStudentId = null;
    const foundStudentIndex = students.findIndex((obj => obj.id == student.id));
    if(foundStudentIndex !== -1){
        students[foundStudentIndex] = student;

        // Refresh student list:
        tableBody.innerHTML= ''; // remove old content
        generateStudentsList(); // render students again
    }
}

// iterate through each student so we can generate table rows with student's data
function generateStudentsList(){
    students.forEach(student => {
        createNewStudentRow(student);
    });
}

generateStudentsList();
const addStudentButton = document.getElementById('addStudentBtn');
const addStudentModal = document.getElementById('addModal');
const closeStudentModalButton = document.getElementById('closeBtn');

function otvoriModal() {
    addStudentModal.classList.add('show');
    addStudentModal.style.display = 'block';
}

function zatvoriModal() {
    addStudentModal.classList.remove('show');
    addStudentModal.style.display = 'none';
}

addStudentButton.onclick = function () {
    otvoriModal();
};

closeStudentModalButton.onclick = function () {
    zatvoriModal();
};

const saveStudentButton = document.getElementById('saveBtn');

function checkIsFormValid(data) {
    const firstNameErr = document.getElementById('imeError');
    const lastNameErr = document.getElementById('prezimeError');
    const yearsErr = document.getElementById('godineError');
    const genderErr = document.getElementById('spolError');
    const cityErr = document.getElementById('mjestoError');
    let isValid = true;

    if (!data.firstName.length) {
        isValid = false;
        firstNameErr.classList.remove('hide');
    } else {
        firstNameErr.classList.add('hide');
    }

    if (!data.lastName.length) {
        isValid = false;
        lastNameErr.classList.remove('hide');
    } else {
        lastNameErr.classList.add('hide');
    }

    if (!data.years.length) {
        isValid = false;
        yearsErr.classList.remove('hide');
    } else {
        yearsErr.classList.add('hide');
    }

    if (!data.gender.length) {
        isValid = false;
        genderErr.classList.remove('hide');
    } else {
        genderErr.classList.add('hide');

    }
    if (!data.city.length) {
        isValid = false;
        cityErr.classList.remove('hide');
    } else {
        cityErr.classList.add('hide');
    }


    return isValid;
}
saveStudentButton.onclick = function () {
    const firstName = document.getElementById('ime').value;
    const lastName = document.getElementById('prezime').value;
    const years = document.getElementById('godine').value;
    const gender = document.getElementById('spol').value;
    const city = document.getElementById('mjesto').value;
    const newStudent = {
        id: editStudentId || getStudentID(),
        firstName,
        lastName,
        years,
        gender,
        city
    };

    if (!checkIsFormValid(newStudent)) {
        // ako postoje errori na formi, ne dopustiti save
        return;
    }

    // ako editStudentId nije popunjen znaci da se radi o novom dodavanju
    if(!editStudentId){
        students.push(newStudent);
        createNewStudentRow(newStudent);
    } else {
        updateStudent(newStudent);
    }
   
    zatvoriModal();
};
