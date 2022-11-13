
// 1.
// const brojac = parseInt(prompt('Koliko brojeva zelite unijeti?'));
// const brojevi = [];

// for (let i = 0; i < brojac; i++) {
//     const unos = parseFloat(prompt('Unesite broj'));
//     brojevi.push(unos);
// }

// brojevi.sort();
// const min = brojevi[0];
// const novi = brojevi.filter(function (value) {
//     return value !== min;
// });

// console.log('prvi niz: ', brojevi.toString());
// console.log('drugi niz: ', novi.toString());



// 2.
// const brojac = parseInt(prompt('Koliko brojeva zelite unijeti?'));
// const brojevi = [];

// for (let i = 0; i < brojac; i++) {
//     const unos = parseFloat(prompt('Unesite broj'));
//     brojevi.push(unos);
// }

// const parni = brojevi.filter(function (value) {
//     return value % 2 === 0;
// });

// const neparni = brojevi.filter(function (value) {
//     return value % 2 !== 0;
// });

// console.log('parni: ', parni.toString());
// console.log('neparni: ', neparni.toString());

// if (parni.length > neparni.length) {
//     console.log('Vise je parnih elemenata');
// } else if (parni.length < neparni.length) {
//     console.log('Vise je neparnih elemenata');
// } else {
//     console.log('Jednak je broj i parnih i neparnih elemenata.')
// }

// 3. 

// function getNajstariji(niz) {
//     const copy = niz; // posto koristim sort, da ne bih mijenjala originalni niz

//     copy.sort(function (a, b) {
//         return b.godine - a.godine;
//     });

//     return copy[0].imePrezime;
// }

// function getStudentSaNajslabijimProsjekom(niz) {
//     const copy = niz; // posto koristim sort, da ne bih mijenjala originalni niz

//     copy.sort(function (a, b) {
//         return a.prosjek - b.prosjek;
//     });

//     return copy[0].imePrezime;
// }

// let studenti = [
//     {
//         imePrezime: 'Niko Nikic',
//         godine: 21,
//         prosjek: 10
//     },
//     {
//         imePrezime: 'Miro Miric',
//         godine: 20,
//         prosjek: 7
//     },
//     {
//         imePrezime: 'Test Test',
//         godine: 22,
//         prosjek: 8
//     }
// ]

// console.log('Najstariji student je ' + getNajstariji(studenti));
// console.log('Student sa najslabijim prosjekom je ' + getStudentSaNajslabijimProsjekom(studenti));

// studenti = studenti.map(function (value) {
//     return {
//         ...value,
//         prosjek: value.prosjek - 1
//     };
// });

// console.log('studenti: ', studenti);

// 4.
// Napraviti niz knjige sa slijedecim atributima:
// naziv knjige, autor, godina, zanr i ocjena
// a) Traziti od korisnika da unese zeljenog autora. Ispisati sve knjige ciji je autor jednak unesenom.
// Ukoliko nema nit jedna pronadjena knjiga, ispisati odgovarajucu poruku.
// b) Ispisati sve knjige sortirane po godini (od najstarije ka najnovijoj)
// c) Traziti od korisnika da unese zeljenu ocjenu. Ispisati sve knjige cija je ocjena veca ili jednaka unesenoj.
// Ukoliko nema nit jedna pronadjena knjiga, ispisati odgovarajucu poruku.
// d) Traziti od korisnika da unese naziv knjige koju pretrazuje. Ispisati sve knjige koje u svom nazivu sadrze uneseni.
// Npr ako unesete rijec "harry" - program treba ispisati sve knjige koje u nazivu sadrze rijec harry
// Ukoliko nema nit jedna pronadjena knjiga, ispisati odgovarajucu poruku.


// NAPOMENA: Za par rjesenja od dole navedenih biti ce predlozene dvije verzije rjesenja. Prva je begginner, druga 
// je nesto naprednija
const books = [
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        year: 2005,
        score: 5.0
    },
    {
        title: 'Island of the missing trees',
        author: 'Elif Shafak',
        year: 2021,
        score: 4.3
    },
    {
        title: 'Tvrdjava',
        author: 'Mesa Selimovic',
        year: 1970,
        score: 5.0
    },
    {
        title: 'The Stranger',
        author: 'Albert Camus',
        year: 1967,
        score: 4.2
    },
    {
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        year: 1943,
        score: 5.0
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J. K. Rowling',
        year: 1999,
        score: 5.0
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        year: 2000,
        score: 4.9
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J. K. Rowling',
        year: 2003,
        score: 4.7
    },
    {
        title: 'The Name of the Rose',
        author: 'Umberto Eco',
        year: 1980,
        score: 3.9
    },
    {
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J. K. Rowling',
        year: 2007,
        score: 4.2
    },
    {
        title: 'The Lovely Bones',
        author: 'Alice Sebold',
        year: 2002,
        score: 4
    }
];

// a)
// const autor = prompt('Unesite zeljenog autora kojeg pretrazujete');
// const booksByAuthor = books.filter((book) => book.author.toLowerCase() === autor.toLowerCase());
// if(booksByAuthor.length > 0) {
//     console.log('Pronadjene knjige su');
//     booksByAuthor.forEach(book => {
//         console.log(book.title);
//     });
// } else {
//     console.log('Nije pronadjena niti jedna knjiga.');
// }


// ILI
// const autor = prompt('Unesite zeljenog autora kojeg pretrazujete');
// const booksByAuthor = books.filter((book) => book.author.toLowerCase() === autor.toLowerCase());
// if (booksByAuthor.length) { // ako je length razlicit od 0
//     console.log('Pronadjene knjige su \n' + booksByAuthor.map((book) => book.title).toString());
// } else {
//     console.log('Nije pronadjena niti jedna knjiga.');
// }


// b)
// books.sort((a, b) => b.year - a.year);
// console.log('Sortirane knjige su: ');
// books.forEach(book => {
//     console.log(`${book.title} - ${book.author} (${book.year})`);
// });

// c)
// const ocjena = Number(prompt('Unesite ocjenu'));
// const booksByOcjena = books.filter((book) => book.score >= ocjena);
// if (booksByOcjena.length > 0) {
//     console.log(`Knjige koje imaju ocjenu >= od ${ocjena} su`);
//     booksByOcjena.forEach(book => {
//         console.log(`${book.title} - ${book.score}`);
//     });
// } else {
//     console.log(`Ne postoji niti jedna knjiga sa ocjenom  >= od ${ocjena}`);
// }

// ILI
// const ocjena = Number(prompt('Unesite ocjenu'));
// const booksByOcjena = books.filter((book) => book.score >= ocjena);
// if (booksByOcjena.length) {
//     console.log(`Knjige koje imaju ocjenu >= od ${ocjena} su`);
//     console.log(booksByOcjena.map((book) => `${book.title} - ${book.score}`).join('\n'));
// } else {
//     console.log(`Ne postoji niti jedna knjiga sa ocjenom  >= od ${ocjena}`);
// }

// d)
// const naziv = prompt('Unesite naziv koji pretrazujete');
// const booksByTitle = books.filter((book) => book.title.toLowerCase().includes(naziv.toLowerCase()));

// if(booksByTitle.length > 0) {
//     console.log('Pronadjene knjige: ');
//     booksByTitle.forEach(book => {
//         console.log(book.title);
//     });
// } else {
//     console.log('Nema pronadjenih knjiga, pokusajte ponovo');
// }

// ILI

// const naziv = prompt('Unesite naziv koji pretrazujete');
// const booksByTitle = books.filter((book) => book.title.toLowerCase().includes(naziv.toLowerCase()));

// if(booksByTitle.length) {
//     console.log('Pronadjene knjige: ');
//     console.log(booksByTitle.map((book)=> book.title).join('\n'));
// } else {
//     console.log('Nema pronadjenih knjiga, pokusajte ponovo');
// }


// -------------------- DODATNI ZADACI -----------------

// 1.
const games = [
    {
        title: 'Minecraft',
        company: '4J Studios',
        year: 2016,
        score: 4.6
    },
    {
        title: 'Blackjack',
        company: 'Clockwise',
        year: 2016,
        score: 3.9
    },
    {
        title: 'Fortnite',
        company: 'Epic Games',
        year: 2017,
        score: 4.9
    },
];

// a)
// games.sort((a,b) => a.year - b.year);
// console.log('Sorted games: ');
// console.log(games.map((game) => `${game.title} - ${game.year}`).join('\n'));

// b)
// const company = prompt('Unesite naziv kompanije');
// const gamesByCompany = games.filter((game) => game.company.toLowerCase() === company.toLowerCase());
// if(gamesByCompany.length) {
//     console.log('Games by company: ');
//     console.log(gamesByCompany.map((game) => `${game.title} - ${game.company}`).join('\n'));
// } else {
//     console.log('Nema pronadjenih rezultata');
// }

// c)
// const year = Number(prompt('Unesite godinu proizvodnje'));
// const gamesByYearPart1 = games.filter((game) => game.year >= year);
// const gamesByYearPart2 = games.filter((game) => game.year < year);

// if (gamesByYearPart1.length) {
//     console.log('Igre koje imaju godinu vecu ili jednaku unesenoj: ');
//     console.log(gamesByYearPart1.map((game) => `${game.title} - ${game.year}`).join('\n'));
// } else {
//     console.log('Nije pronadjena niti jedna igra cija je godina veca ili jednaka unesenoj');
// }

// if (gamesByYearPart2.length) {
//     console.log('Igre koje imaju godinu manju od unesene: ');
//     console.log(gamesByYearPart2.map((game) => `${game.title} - ${game.year}`).join('\n'));
// } else {
//     console.log('Nije pronadjena niti jedna igra cija je godina manja od unesene');
// }

// d) 
// const enteredYear = Number(prompt('Unesite godinu proizvodnje'));
// const score = Number(prompt('Unesite godinu proizvodnje'));

// const gamesByYearAndScore = games.filter((game) => game.year === enteredYear && game.score > score);

// if (gamesByYearAndScore.length) {
//     console.log('Pronadjene igre su: ');
//     console.log(gamesByYearAndScore.map((game) => `${game.title} - ${game.year} - ${game.score}`).join('\n'));
// } else {
//     console.log('Nije pronadjena niti jedna igrica.');
// }

// e)
// const obj = {};
// obj.title = prompt('Unesite naslov igre');
// obj.company = prompt('Unesite kompaniju');
// obj.year = prompt('Unesite godinu proizvodnje');
// obj.score = prompt('Unesite ocjenu');

// games.push(obj);
// console.log('Igre:');
// console.log(games.map((game) => `${game.title} - ${game.year} - ${game.company} - ${game.score}`).join('\n'));


// f)
// const count = Number(prompt('Koliko igara zelite dodati'));
// for (let i = 0; i < count; i++) {
//     const obj = {};
//     obj.title = prompt('Unesite naslov igre');
//     obj.company = prompt('Unesite kompaniju');
//     obj.year = prompt('Unesite godinu proizvodnje');
//     obj.score = prompt('Unesite ocjenu');
//     games.push(obj);
// }

// console.log('Igre:');
// console.log(games.map((game) => `${game.title} - ${game.year} - ${game.company} - ${game.score}`).join('\n'));



// 5.
const zivotinje = [
    {
        vrsta: 'Macka',
        ime: 'Cicko',
        boja: 'Zuta',
        godinaRodjenja: 2019
    },
    {
        vrsta: 'Pas',
        ime: 'Rex',
        boja: 'Crna',
        godinaRodjenja: 2014
    },
    {
        vrsta: 'Pas',
        ime: 'Boby',
        boja: 'Smedja',
        godinaRodjenja: 2021
    },
    {
        vrsta: 'Macka',
        ime: 'Fleky',
        boja: 'Crna',
        godinaRodjenja: 2021
    },
];

//a)
zivotinje.sort((a,b) => a.godinaRodjenja - b.godinaRodjenja);
console.log('Sortirani: ');
console.log(zivotinje.map((animal) => `${animal.vrsta} - ${animal.ime} - ${animal.godinaRodjenja}`).join('\n'));

//b)
// const boja = prompt('Unesite boju');
// const zivotinjeByBoja = zivotinje.filter((an) => an.boja.toLowerCase() === boja.toLowerCase());

// console.log('Zivotinje by boja: ');
// console.log(zivotinjeByBoja.map((animal) => `${animal.ime} - ${animal.boja}`).join('\n'));

// c)
// const najmanjaGodina = zivotinje.sort((a,b) => b.godinaRodjenja - a.godinaRodjenja)[0].godinaRodjenja;
// const najmladjeZivotinje = zivotinje.filter((an) => an.godinaRodjenja === najmanjaGodina);
// console.log('Najmladje zivotinje');
// console.log(najmladjeZivotinje.map((animal) => `${animal.ime} - ${animal.godinaRodjenja}`).join('\n'));

//d)

// const count = Number(prompt('Koliko zivotinja zelite dodati'));
// for (let i = 0; i < count; i++) {
//     const obj = {};
//     obj.vrsta = prompt('Unesite vrstu');
//     obj.ime = prompt('Unesite ime');
//     obj.godinaRodjenja = prompt('Unesite godinu rodjenja');
//     obj.boja = prompt('Unesite boju');
//     zivotinje.push(obj);
// }

// console.log('Zivotinje:');
// console.log(zivotinje.map((animal) => `${animal.vrsta} - ${animal.ime} - ${animal.godinaRodjenja} - ${animal.boja}`).join('\n'));

