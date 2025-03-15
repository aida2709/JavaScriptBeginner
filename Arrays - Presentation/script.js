// a)
const subjects = [
    'Programming 1',
    'Programming 2',
    'Web Development',
    'Software Development',
    'Project Management',
];

// b)
console.log('Array length: ', subjects.length);

// c)
console.log('Subjects', subjects.toString());

// d)
console.log('Subjects', subjects.join(' * '));

// f)
const newSubject = prompt('Enter the name of the subject you want to add: ');
subjects.push(newSubject);
console.log('Subjects after adding an element: ', subjects.toString());

// g)
subjects.shift();
console.log('Subjects after removing the first element: ', subjects.toString());

// h)
const newSubject2 = prompt('Enter the name of the subject you want to add: ');
subjects.unshift(newSubject2);
console.log('Subjects after adding an element to the first position: ', subjects.toString());

// i)
subjects.pop();
console.log('Subjects after removing the last element: ', subjects.toString());