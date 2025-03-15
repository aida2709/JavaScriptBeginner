// /**
//  * a) Create a Book object with the following attributes:​
// book name, author, genre, publishing year, rating​
// ​
// b) Create a function within the object "displayDetails" that prints all the details about the book and call it to display the details​
//  */

// const book = {
//   name: "The Secrets of Divine Love",
//   author: "A. Helwa",
//   genre: "Religious Text",
//   publishingYear: "2019",
//   rating: 10,

//   displayDetails: function () {
//     console.log(`${this.name} - ${this.author}`);
//     console.log(`Genre: ${this.genre}`);
//     console.log(`Publishing Year: ${this.publishingYear}`);
//     console.log(`Rating: ${this.rating}/10`);
//   },
// };

// book.displayDetails();

// /**
//  * a) Create a Subject object with the following attributes:​
// subject name, list of professors (array of strings), study year in which the subject is taught, number of ECTS credits​
// ​
// b) Create a function within the object "displayDetails" that prints all the details about the subject and call it to display the details​
//  */

// const subject = {
//   name: "JavaScript for Beginners",
//   professors: ["Jemima Abu", "Dave Aronson", "Adam Bien"],
//   year: 1,
//   ECTS: 12,

//   displayDetails: function () {
//     console.log(this.name);
//     console.log(`Professors: ${this.professors.toString()}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`ECTS: ${this.ECTS}`);
//   },
// };

// subject.displayDetails();

const books = [
  {
    name: "The Secrets of Divine Love",
    author: "A. Helwa",
    genre: "Religious Text",
    publishingYear: 2019,
    rating: 10,
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fantasy/Adventure",
    publishingYear: 2002,
    rating: 9.6,
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Novel",
    publishingYear: 1960,
    rating: 9.9,
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    genre: "Fantasy/Adventure",
    publishingYear: 2000,
    rating: 9.7,
  },
];

books.sort((a, b) => a.name - b.name);
console.log(books);


const booksByAuthor = books.filter((el) => el.author === 'J.K. Rowling');
console.log('booksByAuthor', booksByAuthor);

const bookNames = books.map((el) => el.name);
console.log(bookNames);

const nameAuthorBooks = books.map((el) => ({
    name: el.name,
    author: el.author
}));
console.log('nameAuthorBooks', nameAuthorBooks);
