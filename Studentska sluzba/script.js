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
    'gender',
    'years',
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
saveStudentButton.onclick = function () {
    console.log('Saving data');
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
    }


    students.push(newStudent);
    createNewStudentRow(newStudent);
    zatvoriModal();
};