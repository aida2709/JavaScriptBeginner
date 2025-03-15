// /**
//  * a) Kreirati objekat Knjiga koji u sebi ima slijedeće atribute:​
// naziv knjige, autor, žanr, godina izdavanja, ocjena​
// ​
// b) Kreirati funkciju unutar objekta "displayDetails" koja ispisuje sve detalje o knjizi i pozvati je kako bi se ispisali detalji​

//  */

// const book = {
//   name: "The Secrets of Divine Love",
//   author: "A. Helwa",
//   genre: "Religious Text",
//   publishingYear: "2019",
//   rating: 10,

//   displayDetails: function () {
//     console.log(`${this.name} - ${this.author}`);
//     console.log(`Zanr: ${this.genre}`);
//     console.log(`Godina izdavanja: ${this.publishingYear}`);
//     console.log(`Ocjena: ${this.rating}/10`);
//   },
// };

// book.displayDetails();

// /**
//  * a) Kreirati objekat Predmet koji u sebi ima slijedeće atribute:​
// naziv predmeta, lista predavaca (niz stringova), godina studija na kojoj se predaje predmet, broj ECTS bodova​
// ​
// b) Kreirati funkciju unutar objekta "displayDetails" koja ispisuje sve detalje o predmetu i pozvati je kako bi se ispisali detalji
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
