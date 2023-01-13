// a)
const predmeti = [
    'Programiranje 1',
    'Programiranje 2',
    'Web development',
    'Razvoj softvera',
    'Upravljanje projektom',
];

// b)
console.log('Duzina niza: ', predmeti.length);

// c)
console.log('Predmeti', predmeti.toString());

// d)
console.log('Predmeti', predmeti.join(' * '));

// f)
const noviPredmet = prompt('Unesite nazi predmeta kojeg zelite dodati: ');
predmeti.push(noviPredmet);
console.log('Predmeti nakon dodavanja elementa: ', predmeti.toString());


// g)
predmeti.shift();
console.log('Predmeti nakon uklanjanja prvog elementa: ', predmeti.toString());

// h)
const noviPredmet2 = prompt('Unesite nazi predmeta kojeg zelite dodati: ');
predmeti.unshift(noviPredmet2);
console.log('Predmeti nakon dodavanja elementa na prvu poziciju: ', predmeti.toString());

// i)
predmeti.pop();
console.log('Predmeti nakon uklanjanja zadnjeg elementa: ', predmeti.toString());
