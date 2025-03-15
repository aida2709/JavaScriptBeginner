const numberOfRows = parseInt(prompt('Enter number of rows'));
const numberOfCols = parseInt(prompt('Enter number of columns'));

const createdTable = document.createElement('table');

for (let i = 0; i < numberOfRows; i++) {
    const red = document.createElement('tr');

    for (let j = 0; j < numberOfCols; j++) {
        const kolona = document.createElement('td');
        kolona.innerText = `Row ${i} Column ${j}`;
        red.append(kolona);
    }

    createdTable.append(red);
}

document.body.appendChild(createdTable);