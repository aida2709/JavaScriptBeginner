
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

