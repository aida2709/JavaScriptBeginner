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
// console.log('Studenti koji imaju slovo M u imenu ili prezimenu su: ');
// displayBasicStudentsInfo(studentsWithLetterM);

// // 1.b)
// console.log(`Ukupno je ${studentsWithLetterM.length} takvih studenata`);

// // 1.c)
// const studentsWithStartingLetterM = students.filter((el) => el.firstName.startsWith('M') || el.lastName.startsWith('M'));
// console.log('\nStudenti kojima ime ili prezime pocinju slovom M: ');
// displayBasicStudentsInfo(studentsWithStartingLetterM);
// console.log(`Ukupno je ${studentsWithStartingLetterM.length} takvih studenata`);

// 1.d)
// const searchedName = prompt('Unesite ime i prezime studenta kojeg pretrazujete');
// const foundStudentIndex = students.findIndex((el) => `${el.firstName} ${el.lastName}` === searchedName);
// if (foundStudentIndex !== -1) {
//     console.log(`Taj student se nalazi na poziciji ${foundStudentIndex}`);
// } else {
//     console.warn('Nije pronadjen niti jedan student sa unesenim imenom i prezimenom');
// }

// // 1.e)
// console.log('\nStudenti sortirani abecedno:');
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
// const stundetsWithFullName = students.map((el) => ({
//     fullName: `${el.lastName} - ${el.firstName}`,
//     averageGrade: el.averageGrade,
//     birthDate: el.birthDate,
// }));
// console.log('stundetsWithFullName', stundetsWithFullName);

// // 1.g)
// const copy = [...students];
// copy.sort((a, b) => b.averageGrade - a.averageGrade);
// console.log(copy);
// const bestStudent = copy[0];
// console.log('\nStudent sa najboljim prosjekom je:');
// displayStudentInfo(bestStudent);

// // 1.h)
// const year = prompt("Unesite godinu koju pretrazujete");
// const studentsByYear = students.filter((el) => {
//   const dateParts = el.birthDate.split(".");
//   const birthYear = dateParts[dateParts.length - 2];

//   return birthYear === year;
// });

// if (studentsByYear.length) {
//   console.log("\nStudenti rodjeni te godine su: ");
//   displayBasicStudentsInfo(studentsByYear);
// } else {
//   console.warn("Ne postoji niti jedan student koji je rodjen te godine.");
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
const categoryName = prompt("Unesite naziv kategorije");
const productByCategory = products.filter((el) => el.category.toLowerCase() === categoryName.toLowerCase());
if (productByCategory.length) {
  console.log("Proizvodi po kategoriji", productByCategory);
} else {
  console.warn("Ne postoji nijedan proizvod sa unesenom kategorijom");
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
// console.log("Prosjecna cijena iznosi: ", sum / prices.length);

// Second way (better)
const sum = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

console.log("Prosjecna cijena iznosi: ", sum / prices.length);

// 2.d)
const copy = [...products];
copy.sort((a, b) => a.price - b.price);
console.log("Sortirano od najmanje cijene ka najvecoj", copy);

// 2.f)
const mostCheapProduct = copy[0];
const mostExpensiveProduct = copy[copy.length - 1];

console.log('Najjeftiniji proizvod je');
displayBasicProductInfo(mostCheapProduct);
console.log('Najskuplji proizvod je');
displayBasicProductInfo(mostExpensiveProduct);

// 2.g)
const price = Number(prompt("Unesite cijenu"));
const productsByPrice = products.filter((el) => el.price >= price);
if (productsByPrice.length) {
  console.log("Proizvodi po cijeni", productsByPrice);
} else {
  console.warn(
    "Ne postoji nijedan proizvod sa cijenom vecom ili jednakom od unesene"
  );
}