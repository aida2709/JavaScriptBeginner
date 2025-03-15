const students = [
    {
        name: 'John Doe',
        course: 'Java Script',
        passed: true
    },
    {
        name: 'Adam Baker',
        course: 'Java Script',
        passed: false
    },
    {
        name: 'Clark Davis',
        course: 'C++',
        passed: true
    },
    {
        name: 'Frank Evans',
        course: 'C++',
        passed: true
    }, 
    {
        name: 'Irwin Hills',
        course: 'Java Script',
        passed: false
    },
     {
        name: 'Mason Lopez',
        course: 'Java Script',
        passed: true
    }, 
    {
        name: 'Sherry White',
        course: 'Vue 3',
        passed: false
    }, 
    {
        name: 'Adam Baker',
        course: 'Vue 3',
        passed: true
    }, {
        name: 'Fiona Baker',
        course: 'C++',
        passed: true
    }, 
];


const table = document.querySelector('table');
table.classList.add('table');

const tableBody = document.querySelector('tbody');

students.forEach(student => {
    const tr = document.createElement('tr');

    if(student.passed) {
        tr.classList.add('table-success');
    } else {
        tr.classList.add('table-danger');
    }

    const nameCell = document.createElement('td');
    nameCell.innerText = student.name;
    tr.appendChild(nameCell);

    const courseCell = document.createElement('td');
    courseCell.innerText = student.course;
    tr.appendChild(courseCell);

    tableBody.appendChild(tr);
});