// ```javascript
// let students = [
//   {
//     firstName: "Sam",
//     lastName: "Farley",
//     averageGrade: 9.4,
//     birthDate: "27.09.1995.",
//   },
//   {
//     firstName: "Di",
//     lastName: "Melantha",
//     averageGrade: 7.8,
//     birthDate: "20.07.1995.",
//   },
//   {
//     firstName: "Amias",
//     lastName: "Alonzo",
//     averageGrade: 8.5,
//     birthDate: "19.03.1996.",
//   },
//   {
//     firstName: "Archie",
//     lastName: "Krystle",
//     averageGrade: 8.4,
//     birthDate: "18.03.1993.",
//   },
//   {
//     firstName: "Tyla",
//     lastName: "Rosanna",
//     averageGrade: 8.5,
//     birthDate: "09.10.1998.",
//   },
//   {
//     firstName: "Mia",
//     lastName: "Caris",
//     averageGrade: 10,
//     birthDate: "12.12.1999.",
//   },
//   {
//     firstName: "Truman",
//     lastName: "Kiaran",
//     averageGrade: 9.1,
//     birthDate: "27.01.1994.",
//   },
// ];
// ```

// // helper method
// const displayStudentInfo = (student) => {
//   console.log(
//     `Student: ${student.firstName} ${student.lastName} (${student.birthDate}) - ${student.averageGrade}`
//   );
// };

// const displayBasicStudentsInfo = (arrayOfStudents) => {
//     arrayOfStudents.forEach((el) => {
//         console.log(`Student: ${el.firstName} ${el.lastName}`);
//     });
// }

// // 1.a)
// const studentsWithLetterM = students.filter((el) => el.firstName.toLowerCase().includes('m') || el.lastName.toLowerCase().includes('m'));
// console.log('Students who have the letter M in their first or last name are: ');
// displayBasicStudentsInfo(studentsWithLetterM);

// // 1.b)
// console.log(`There are ${studentsWithLetterM.length} such students in total`);

// // 1.c)
// const studentsWithStartingLetterM = students.filter((el) => el.firstName.startsWith('M') || el.lastName.startsWith('M'));
// console.log('\nStudents whose first or last name starts with the letter M: ');
// displayBasicStudentsInfo(studentsWithStartingLetterM);
// console.log(`There are ${studentsWithStartingLetterM.length} such students in total`);

// 1.d)
// const searchedName = prompt('Enter the full name of the student you are searching for');
// const foundStudentIndex = students.findIndex((el) => `${el.firstName} ${el.lastName}` === searchedName);
// if (foundStudentIndex !== -1) {
//     console.log(`That student is at position ${foundStudentIndex}`);
// } else {
//     console.warn('No student found with the entered full name');
// }

// // 1.e)
// console.log('\nStudents sorted alphabetically:');
// students.sort((a, b) => {
//   if (a.lastName < b.lastName) {
//     return -1;
//   }
//   if (a.lastName > b.lastName) {
//     return 1;
//   }
//   return 0;
// });
// displayBasicStudentsInfo(students);

// // 1.f)
// const studentsWithFullName = students.map((el) => ({
//     fullName: `${el.lastName} - ${el.firstName}`,
//     averageGrade: el.averageGrade,
//     birthDate: el.birthDate,
// }));
// console.log('studentsWithFullName', studentsWithFullName);

// // 1.g)
// const copy = [...students];
// copy.sort((a, b) => b.averageGrade - a.averageGrade);
// console.log(copy);
// const bestStudent = copy[0];
// console.log('\nThe student with the best average grade is:');
// displayStudentInfo(bestStudent);

// // 1.h)
// const year = prompt("Enter the year you are searching for");
// const studentsByYear = students.filter((el) => {
//   const dateParts = el.birthDate.split(".");
//   const birthYear = dateParts[dateParts.length - 2];

//   return birthYear === year;
// });

// if (studentsByYear.length) {
//   console.log("\nStudents born in that year are: ");
//   displayBasicStudentsInfo(studentsByYear);
// } else {
//   console.warn("There is no student born in that year.");
// }


const products = [
  { name: "Product 1", category: "Electronics", price: 99.99 },
  { name: "Product 2", category: "Books", price: 19.99 },
  { name: "Product 3", category: "Electronics", price: 149.99 },
  { name: "Product 4", category: "Clothing", price: 49.99 },
];

const displayBasicProductInfo = (product) => {
    console.log(`${product.name} - $${product.price}`)
}

// 2.a)
const categoryName = prompt("Enter the category name");
const productByCategory = products.filter((el) => el.category.toLowerCase() === categoryName.toLowerCase());
if (productByCategory.length) {
  console.log("Products by category", productByCategory);
} else {
  console.warn("There is no product with the entered category");
}

// 2.b)
const prices = products.map((el) => el.price);
console.log('prices', prices);

// 2.c)
// First way
// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });
// console.log("The average price is: ", sum / prices.length);

// Second way (better)
const sum = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

console.log("The average price is: ", sum / prices.length);

// 2.d)
const copy = [...products];
copy.sort((a, b) => a.price - b.price);
console.log("Sorted from the lowest price to the highest", copy);

// 2.f)
const mostCheapProduct = copy[0];
const mostExpensiveProduct = copy[copy.length - 1];

console.log('The cheapest product is');
displayBasicProductInfo(mostCheapProduct);
console.log('The most expensive product is');
displayBasicProductInfo(mostExpensiveProduct);

// 2.g)
const price = Number(prompt("Enter the price"));
const productsByPrice = products.filter((el) => el.price >= price);
if (productsByPrice.length) {
  console.log("Products by price", productsByPrice);
} else {
  console.warn(
    "There is no product with a price greater than or equal to the entered amount"
  );
}