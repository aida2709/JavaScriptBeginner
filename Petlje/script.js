// 1.

// const n = Number(prompt('Unesite n'));
// const k = Number(prompt('Unesite k'));

// let brojac = n;

// console.log(`Parni brojevi u intervalu od ${n} do ${k} su: `);
// while (brojac <= k) {
//     if (brojac % 2 == 0) {
//         console.log(brojac);
//     }
//     brojac++;
// }


// 2. 

// let brojac = 1;

// while (brojac <= 10) {
//     console.log('DOBRODOSLI');
//     brojac++;
// }



// 3.

// const n = Number(prompt('Unesite n'));
// const k = Number(prompt('Unesite k'));

// let brojac = n;

// console.log(`Parni brojevi u intervalu od ${n} do ${k} su: `);
// do {
//     if (brojac % 2 == 0) {
//         console.log(brojac);
//     }
//     brojac++;
// } while (brojac <= k);


// 4. 

// let brojac = 1;

// do {
//     console.log('DOBRODOSLI');
//     brojac++;
// } while (brojac <= 10);

// 5. 
// a) while petlja

// const n = Number(prompt('Unesite n'));
// const k = Number(prompt('Unesite k'));

// let brojac = n;
// let suma=0;
// let sumaParnih=0;
// let proizvod=1;
// let ukupnoBrojeva=0;

// while (brojac <= k) {
//     if (brojac % 2 == 0) {
//         sumaParnih+=brojac;
//     } else{
//         proizvod*=brojac;
//     }

//     suma+=brojac;
//     ukupnoBrojeva++;
//     brojac++;
// }

// console.log(`Suma parnih brojeva u intervalu od ${n} do ${k} je: ${sumaParnih}`);
// console.log(`Proizvod neparnih brojeva u intervalu od ${n} do ${k} je: ${proizvod}`);
// console.log(`Aritmeticka sredina brojeva u intervalu od ${n} do ${k} je: ${suma/ukupnoBrojeva}`);


// b) do-while petlja

// const n = Number(prompt('Unesite n'));
// const k = Number(prompt('Unesite k'));

// let brojac = n;
// let suma=0;
// let sumaParnih=0;
// let proizvod=1;
// let ukupnoBrojeva=0;

// do {
//     if (brojac % 2 == 0) {
//         sumaParnih+=brojac;
//     } else{
//         proizvod*=brojac;
//     }

//     suma+=brojac;
//     ukupnoBrojeva++;
//     brojac++;
// } while (brojac <= k);

// console.log(`Suma parnih brojeva u intervalu od ${n} do ${k} je: ${sumaParnih}`);
// console.log(`Proizvod neparnih brojeva u intervalu od ${n} do ${k} je: ${proizvod}`);
// console.log(`Aritmeticka sredina brojeva u intervalu od ${n} do ${k} je: ${suma/ukupnoBrojeva}`);



// 6.
// for(let i=1; i<=10;i++){
//     console.log(i);
// }

// 7.

// for(let i=10; i>=1;i--){
//     console.log(i);
// }

// 8.
// let n = Number(prompt('Unesite n: '));
// for(let i=1; i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }