// 1.
// let niz = [45, 5, 7, 80, 10, 207, 113];

// // sva dole ispod navedena rjesenja bi bilo dobro doraditi tako da rade i za pozitivne i negativne brojeve
// // (koristiti samo Math.abs())

// // a)
// console.log('Dvocifreni', niz.filter((element) => element >= 10 && element <= 99).toString());

// // b)
// const jednocifreni = niz.filter((element) => element >= 0 && element <= 9);
// console.log('Ukupno jednocifrenih ima: ', jednocifreni.length);

// // c)
// niz = niz.map((element) => element * 2);
// console.log('Izmjenjen niz', niz.toString());

// // d)
// niz.sort((a, b) => a - b);
// console.log('Sortiran niz (najmanji => najveci)', niz.toString());

// // e)
// niz.sort((a, b) => b - a);
// console.log('Sortiran niz (najveci => najmanji)', niz.toString());

// // f)
// let srednja = 0;
// let ukupno = niz.length;

// niz.forEach(element => {
//     srednja += element;
// });

// srednja = srednja / ukupno;
// niz = niz.filter((element) => element <= srednja);

// console.log('Srednja vrijednost je: ', srednja);
// console.log('Filtriran niz: ', niz.toString());


// 2.
let studenti = ['Jasmyn Tamzen', 'Sam Farley', 'Di Melantha', 'Amias Alonzo', 'Archie Krystle', 'Tyla Rosanna', 'Mia Caris', 'Truman Kiaran'];

// a)
const studentiWithM = studenti.filter((element) => element.toUpperCase().includes('M'));
console.log('Studenti koji sadrze slovo M: ', studentiWithM.toString());

// b)
console.log('Ukupno takvih studenata je ', studentiWithM.length);

// c)
const studentiWithStartingM = studenti.filter((element) => {
    // ime
    const imeSadrzi = element[0].toUpperCase() === 'M';

    // prvo cemo pronaci gdje se nalazi razmak da bismo mogli izvaditi prezime
    const indexRazmaka = element.indexOf(' ');
    const prezime = element.slice(indexRazmaka + 1);

    const prezimeSadrzi = prezime[0].toUpperCase() === 'M';

    if (imeSadrzi || prezimeSadrzi) {
        return element;
    }
});

console.log('Studenti cije ime ili prezime pocinje slovom M: ', studentiWithStartingM);
console.log('Ukupno takvih studenata je: ', studentiWithStartingM.length);


// d)
const imePrezime = prompt('Unesite ime i prezime studenta kojeg pretrazujete');
const index = studenti.indexOf((imePrezime));
if (index === -1) {
    console.error('Trazeni student nije pronadjen');
} else {
    console.log('Trazeni student se nalazi na poziciji', index);
}

// e)
studenti.sort();
console.log('Sortirani abecedno', studenti.toString());

// f)
const noviNiz = studenti.map((element) => element.replace(' ', '-'));
console.log('Novi niz ', noviNiz);