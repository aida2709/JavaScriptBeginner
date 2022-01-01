const brojRedova = parseInt(prompt('Unesite broj redova'));
const brojKolona = parseInt(prompt('Unesite broj redova'));

const createdTable = document.createElement('table');

for (let i = 0; i < brojRedova; i++) {
    const red = document.createElement('tr');

    for (let j = 0; j < brojKolona; j++) {
        const kolona = document.createElement('td');
        kolona.innerText = `Red ${i} Kolona ${j}`;
        red.append(kolona);
    }

    createdTable.append(red);
}

document.body.appendChild(createdTable);