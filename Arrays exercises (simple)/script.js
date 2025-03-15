// 1.
// let array = [45, 5, 7, 80, 10, 207, 113];

// // All solutions below would be good to improve so they work for both positive and negative numbers
// // (use only Math.abs())

// // a)
console.log('Two-digit numbers', array.filter((element) => element >= 10 && element <= 99).toString());

// // b)
const singleDigit = array.filter((element) => element >= 0 && element <= 9);
console.log('Total number of single-digit numbers: ', singleDigit.length);

// // c)
array = array.map((element) => element * 2);
console.log('Modified array', array.toString());

// // d)
array.sort((a, b) => a - b);
console.log('Sorted array (smallest => largest)', array.toString());

// // e)
array.sort((a, b) => b - a);
console.log('Sorted array (largest => smallest)', array.toString());

// // f)
let average = 0;
let total = array.length;

array.forEach(element => {
    average += element;
});

average = average / total;
array = array.filter((element) => element <= average);

console.log('The average value is: ', average);
console.log('Filtered array: ', array.toString());


// 2.
let students = ['Jasmyn Tamzen', 'Sam Farley', 'Di Melantha', 'Amias Alonzo', 'Archie Krystle', 'Tyla Rosanna', 'Mia Caris', 'Truman Kiaran'];

// a)
const studentsWithM = students.filter((element) => element.toUpperCase().includes('M'));
console.log('Students containing the letter M: ', studentsWithM.toString());

// b)
console.log('Total number of such students is ', studentsWithM.length);

// c)
const studentsWithStartingM = students.filter((element) => {
    // first name
    const firstNameContains = element[0].toUpperCase() === 'M';

    // first, we will find where the space is located so we can extract the last name
    const spaceIndex = element.indexOf(' ');
    const lastName = element.slice(spaceIndex + 1);

    const lastNameContains = lastName[0].toUpperCase() === 'M';

    if (firstNameContains || lastNameContains) {
        return element;
    }
});

console.log('Students whose first or last name starts with the letter M: ', studentsWithStartingM);
console.log('Total number of such students is: ', studentsWithStartingM.length);


// d)
const firstNameLastName = prompt('Enter the first and last name of the student you are searching for');
const index = students.indexOf((firstNameLastName));
if (index === -1) {
    console.error('The requested student was not found');
} else {
    console.log('The requested student is located at position', index);
}

// e)
students.sort();
console.log('Sorted alphabetically', students.toString());

// f)
const newArray = students.map((element) => element.replace(' ', '-'));
console.log('New array ', newArray);
