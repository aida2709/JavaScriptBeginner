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

let columns = [
    'firstName',
    'lastName',
    'gender',
    'years',
    'city'
];

const tableBody = document.querySelector('.table tbody');// fetch <tbody></tbody> so we can append rows to it

// iterate through each student so we can generate table rows with student's data
students.forEach(student => {
    const createdRow = document.createElement('tr');

    let cells = columns.map(column => {
        let cell = document.createElement('td');
        cell.innerText = student[column];
        return cell;
    });

    createdRow.append(...cells);
    tableBody.appendChild(createdRow);
});


const addStudentButton = document.getElementById('addStudentBtn');
const addStudentModal = document.getElementById('addModal');
const closeStudentModalButton = document.getElementById('closeBtn');

addStudentButton.onclick = function () {
    addStudentModal.classList.add('show');
    addStudentModal.style.display = 'block';
};

closeStudentModalButton.onclick = function () {
    addStudentModal.classList.remove('show');
    addStudentModal.style.display = 'none';
};