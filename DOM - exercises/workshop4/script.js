const programmingLangs = [];

for (let i = 1; i <= 3; i++) {
    const lang = prompt('Unesite programski jezik');
    programmingLangs.push(lang);
}

const lista = document.createElement('ol');
lista.classList.add('list-group', 'list-group-numbered');

programmingLangs.forEach(lang => {
    const li = document.createElement('li');
    li.innerText = lang;
    li.classList.add('list-group-item');
    lista.appendChild(li);
});

document.body.appendChild(lista);
