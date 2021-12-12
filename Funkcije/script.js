// 1. 
// function Kubiraj(broj) {
//     return broj * broj * broj;
// }

// const broj = parseFloat(prompt('Unesite neki broj: '));
// alert('Kub broja je ' + Kubiraj(broj));

// 2.
// function Saberi(a, b) {
//     return a + b;
// }

// function Oduzmi(a, b) {
//     return a - b;
// }

// function Pomnozi(a, b) {
//     return a * b;
// }

// function Podijeli(a, b) {
//     if(b===0){
//         alert('Nije moguce dijeliti nulom!');
//         return 0;
//     }

//     return a/b;
// }


// const broj1 = parseFloat(prompt('Unesite prvi broj: '));
// const broj2 = parseFloat(prompt('Unesite drugi broj: '));

// console.log('Suma je ' + Saberi(broj1, broj2));
// console.log('Razlika je ' + Oduzmi(broj1, broj2));
// console.log('Proizvod je ' + Pomnozi(broj1, broj2));
// console.log('Kolicnik je ' + Podijeli(broj1, broj2));

// 3. 

// function GetMax(a, b, c) {
//     let max = a;

//     if (b > max) {
//         max = b;
//     }

//     if (c > max) {
//         max = c;
//     }

//     return max;
// }

// const broj1 = parseFloat(prompt('Unesite prvi broj: '));
// const broj2 = parseFloat(prompt('Unesite drugi broj: '));
// const broj3 = parseFloat(prompt('Unesite treci broj: '));
// alert('Najveci broj je ' + GetMax(broj1, broj2, broj3));

// 4.

// function GetSumaRange(a, b) {
//     let suma = 0;

//     for (let i = a; i <= b; i++) {
//         suma += i;
//     }

//     return suma;
// }


// const rasponOd = parseInt(prompt('Unesite raspon od: '));
// const rasponDo = parseInt(prompt('Unesite raspon do: '));
// alert(`Suma brojeva od broja ${rasponOd} do broja ${rasponDo} je ${GetSumaRange(rasponOd, rasponDo)}`)


// 5.

// function Stepenuj(a, x) {
//     let p = 1;

//     for (let i = 0; i < x; i++) {
//         p *= a;
//     }

//     return p;
// }


// const baza = parseFloat(prompt('Unesite bazu: '));
// const exp = parseInt(prompt('Unesite stepen (eksponent): '));
// alert('Rezultat je ' + Stepenuj(baza, exp));

// 6.

// function isDvocifren(broj) {
//     return broj >= 10 && broj <= 99;
// }

// function GetSuma(n) {
//     let suma = 0;
//     for (let i = 10; i < n; i++) {// idem od 10 jer znam da je 10 najmanji dvocifreni parni broj - da se ustedi broj izvrsavanja for petlje
//         if (i % 2 == 0 && isDvocifren(i)) {
//             suma += i;
//         }
//     }

//     return suma;

// }

// const n = parseInt(prompt('Unesite n: '));
// alert(`Suma parnih dvocifrenih brojeva od 1 do ${n} iznosi ${GetSuma(n)}`);
