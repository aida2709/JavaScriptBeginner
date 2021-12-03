/* 1.*/

/*const slovo = prompt('Unesite zeljeno slovo');
// .toUpperCase() - pretvara bilo koji string u velika slova
// tako da nas primjer radi i za a i A
switch(slovo.toUpperCase()) {
case 'A': alert('Redni broj je 1'); break;
case 'E': alert('Redni broj je 5'); break;
case 'I': alert('Redni broj je 9'); break;
case 'O': alert('Redni broj je 15'); break;
case 'U': alert('Redni broj je 20'); break;
default: alert('Niste unijeli samoglasnik!'); break;
} */


// 2. 
/* const a = parseFloat(prompt('Unesite stranicu a'));
const b = parseFloat(prompt('Unesite stranicu b'));
const c = parseFloat(prompt('Unesite stranicu c'));

const izbor = prompt('Da li zelite racunati obim ili povrsinu? ');

switch (izbor.toLocaleLowerCase()) {
    case 'obim':
        const O = a + b + c;
        alert('Obim je ' + O);
        break;
    case 'povrsina':
        const P = (a + b) / 2;
        alert('Povrsina je ' + P);
        break;
    default: alert('Niste unijeli validan izbor. Unesite `obim` ili `povrsina`');
} */

// 3.

/*const mjesec = parseInt(prompt('Unesite mjesec'));
const godina = parseInt(prompt('Unesite godinu'));

switch(mjesec) {
    case 1: alert('Januar, 31 dan'); break;
    case 2:
        if(godina % 4 == 0){
            alert('Februar, 29 dana');
        } else {
            alert('Februar, 28 dana');
        }
        break;
    case 3: alert('Mart, 31 dan'); break;
    case 4: alert('April, 30 dana'); break;
    case 5: alert('Maj, 31 dan'); break;
    case 6: alert('Juni, 30 dana'); break;
    case 7: alert('Juli, 31 dan'); break;
    case 8: alert('August, 31 dan'); break;
    case 9: alert('Septembar, 30 dana'); break;
    case 10: alert('Oktobar, 31 dan'); break;
    case 11: alert('Novembar, 30 dana'); break;
    case 12: alert('Decembar, 31 dan'); break;
    default: alert('Niste unijeli validan redni broj.'); break;
}*/


// 4.
/*const k = parseInt(prompt('Unesite k'));
let y;

switch (k) {
    case 1: y = k + 2; break;
    case 2: y = k - 1; break;
    case 3: y = k * 2; break;
    case 4: y = k / 2; break;
    case 5: y = k % 2; break;
    default: alert('Niste unijeli validan broj.'); break;
}

alert('y = ' + y);*/

// 5.
/* alert('1 - Pileci fileti 5 KM\n2 - Cevapi 7 KM\n3 - Pizza 8 KM');

const izbor = parseInt(prompt('Unesite redni br zeljenog jela'));
const kolicina = parseInt(prompt('Unesite zeljenu kolicinu'));

let ukupno;
let ukupnoPDV;

switch (izbor) {
    case 1: ukupno = 5 * kolicina; break;
    case 2: ukupno = 7 * kolicina; break;
    case 3: ukupno = 8 * kolicina; break;
    default: alert('Redni broj nije validan.'); break;
}

ukupnoPDV = ukupno + ukupno * 0.17;
alert('Ukupno je ' + ukupno);
alert('Ukupno sa PDV-om je ' + ukupnoPDV); */

// 6. 

/*const sirina = parseFloat(prompt('Unesite sirinu'));
const duzina = parseFloat(prompt('Unesite duzinu'));

const prodavac1 = 24.5 * sirina * duzina;
const prodavac2 = (12.5 * sirina * duzina) + 400;

console.log('prodavac1', prodavac1); // ovo su samo za nas logovi da ispratimo da li je zadatak tacan
console.log('prodavac2', prodavac2);


if (prodavac1 < prodavac2) {
    alert('Preprocujemo Prodavaca 1');
}
else if (prodavac1 > prodavac2) {
    alert('Preprocujemo Prodavaca 2');
} else {
    alert('Oba prodavaca imaju iste cijene!');
}*/

// 7.

/*const a = parseInt(prompt('Unesite a'));
const b = parseInt(prompt('Unesite b'));
const c = parseInt(prompt('Unesite c'));

let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

alert('Najveci broj je ' + max);*/