const students = [
    {
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

/**********************************************
1. dio START 
***********************************************/
let columns = [
    'firstName',
    'lastName',
    'years',
    'gender',
    'city'
];

const tableBody = document.querySelector('.table tbody');// fetch <tbody></tbody> so we can append rows to it

function createNewStudentRow(student) {
    const createdRow = document.createElement('tr');

    let cells = columns.map(column => {
        let cell = document.createElement('td');
        cell.innerText = student[column];
        return cell;
    });

    createdRow.append(...cells);
    tableBody.appendChild(createdRow);

}

// iterate through each student so we can generate table rows with student's data
students.forEach(student => {
    createNewStudentRow(student);
});
/**********************************************
1. dio END 
***********************************************/



/**********************************************
2. dio START 
***********************************************/
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
/**********************************************
2. dio END 
***********************************************/




/**********************************************
3. dio START 
***********************************************/
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

    students.push(newStudent);
    createNewStudentRow(newStudent);
    zatvoriModal();
};
/**********************************************
3. dio END 
***********************************************/