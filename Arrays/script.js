// 1.
// const count = parseInt(prompt('How many numbers would you like to enter?'));
// const numbers = [];

// for (let i = 0; i < count; i++) {
//     const input = parseFloat(prompt('Enter a number'));
//     numbers.push(input);
// }

// numbers.sort();
// const min = numbers[0];
// const newNumbers = numbers.filter(function (value) {
//     return value !== min;
// });

// console.log('First array: ', numbers.toString());
// console.log('Second array: ', newNumbers.toString());


// 2.
// const count = parseInt(prompt('How many numbers would you like to enter?'));
// const numbers = [];

// for (let i = 0; i < count; i++) {
//     const input = parseFloat(prompt('Enter a number'));
//     numbers.push(input);
// }

// const even = numbers.filter(function (value) {
//     return value % 2 === 0;
// });

// const odd = numbers.filter(function (value) {
//     return value % 2 !== 0;
// });

// console.log('Even: ', even.toString());
// console.log('Odd: ', odd.toString());

// if (even.length > odd.length) {
//     console.log('There are more even numbers');
// } else if (even.length < odd.length) {
//     console.log('There are more odd numbers');
// } else {
//     console.log('The number of even and odd elements is the same.');
// }


// 3.
// function getOldest(arr) {
//     const copy = arr; // to not change the original array while using sort

//     copy.sort(function (a, b) {
//         return b.age - a.age;
//     });

//     return copy[0].name;
// }

// function getStudentWithLowestAverage(arr) {
//     const copy = arr; // to not change the original array while using sort

//     copy.sort(function (a, b) {
//         return a.average - b.average;
//     });

//     return copy[0].name;
// }

// let students = [
//     {
//         name: 'Niko Nikic',
//         age: 21,
//         average: 10
//     },
//     {
//         name: 'Miro Miric',
//         age: 20,
//         average: 7
//     },
//     {
//         name: 'Test Test',
//         age: 22,
//         average: 8
//     }
// ];

// console.log('The oldest student is ' + getOldest(students));
// console.log('The student with the lowest average is ' + getStudentWithLowestAverage(students));

// students = students.map(function (value) {
//     return {
//         ...value,
//         average: value.average - 1
//     };
// });

// console.log('Students: ', students);


// 4. 
// const games = [
//     {
//         title: 'Minecraft',
//         company: '4J Studios',
//         year: 2016,
//         score: 4.6
//     },
//     {
//         title: 'Blackjack',
//         company: 'Clockwise',
//         year: 2016,
//         score: 3.9
//     },
//     {
//         title: 'Fortnite',
//         company: 'Epic Games',
//         year: 2017,
//         score: 4.9
//     },
// ];

// // a) Sort the games by year and print the sorted list
// games.sort((a, b) => a.year - b.year);
// console.log('Sorted games: ');
// console.log(games.map((game) => `${game.title} - ${game.year}`).join('\n'));

// // b) Filter and print games by company
// const company = prompt('Enter the company name');
// const gamesByCompany = games.filter((game) => game.company.toLowerCase() === company.toLowerCase());
// if (gamesByCompany.length) {
//     console.log('Games by company: ');
//     console.log(gamesByCompany.map((game) => `${game.title} - ${game.company}`).join('\n'));
// } else {
//     console.log('No results found');
// }

// // c) Filter games by year
// const year = Number(prompt('Enter the year of production'));
// const gamesByYearPart1 = games.filter((game) => game.year >= year);
// const gamesByYearPart2 = games.filter((game) => game.year < year);

// if (gamesByYearPart1.length) {
//     console.log('Games with a year greater than or equal to the entered year: ');
//     console.log(gamesByYearPart1.map((game) => `${game.title} - ${game.year}`).join('\n'));
// } else {
//     console.log('No games found with a year greater than or equal to the entered year');
// }

// if (gamesByYearPart2.length) {
//     console.log('Games with a year less than the entered year: ');
//     console.log(gamesByYearPart2.map((game) => `${game.title} - ${game.year}`).join('\n'));
// } else {
//     console.log('No games found with a year less than the entered year');
// }

// // d) Filter games by year and score
// const enteredYear = Number(prompt('Enter the year of production'));
// const score = Number(prompt('Enter the score'));

// const gamesByYearAndScore = games.filter((game) => game.year === enteredYear && game.score > score);

// if (gamesByYearAndScore.length) {
//     console.log('Found games: ');
//     console.log(gamesByYearAndScore.map((game) => `${game.title} - ${game.year} - ${game.score}`).join('\n'));
// } else {
//     console.log('No games found.');
// }

// // e) Add a new game to the array
// const obj = {};
// obj.title = prompt('Enter the game title');
// obj.company = prompt('Enter the company');
// obj.year = prompt('Enter the year of production');
// obj.score = prompt('Enter the score');

// games.push(obj);
// console.log('Games:');
// console.log(games.map((game) => `${game.title} - ${game.year} - ${game.company} - ${game.score}`).join('\n'));

// // f) Add multiple games to the array
// const count = Number(prompt('How many games would you like to add'));
// for (let i = 0; i < count; i++) {
//     const obj = {};
//     obj.title = prompt('Enter the game title');
//     obj.company = prompt('Enter the company');
//     obj.year = prompt('Enter the year of production');
//     obj.score = prompt('Enter the score');
//     games.push(obj);
// }

// console.log('Games:');
// console.log(games.map((game) => `${game.title} - ${game.year} - ${game.company} - ${game.score}`).join('\n'));


// 5.
const animals = [
    {
        species: 'Cat',
        name: 'Cicko',
        color: 'Yellow',
        birthYear: 2019
    },
    {
        species: 'Dog',
        name: 'Rex',
        color: 'Black',
        birthYear: 2014
    },
    {
        species: 'Dog',
        name: 'Boby',
        color: 'Brown',
        birthYear: 2021
    },
    {
        species: 'Cat',
        name: 'Fleky',
        color: 'Black',
        birthYear: 2021
    },
];

// a) Sort the animals by birth year and print the sorted list
animals.sort((a, b) => a.birthYear - b.birthYear);
console.log('Sorted animals: ');
animals.forEach(animal => {
    console.log(`${animal.name} - ${animal.species} (${animal.birthYear})`);
});
