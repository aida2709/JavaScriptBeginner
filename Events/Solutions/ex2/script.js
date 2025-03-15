const prviBrojInput = document.getElementById('prviBroj');
const drugiBrojInput = document.getElementById('drugiBroj');
const znakInput = document.getElementById('znak');
const deleteButton = document.getElementById('deleteBtn');
const rezultat = document.getElementById('rezultat');
const allowedSymbols = ['+', '-', '/', '*', '%'];

function izracunajRezultat() {
    let prviBroj = prviBrojInput.value && parseFloat(prviBrojInput.value);
    let drugiBroj = drugiBrojInput.value && parseFloat(drugiBrojInput.value);
    let znak = znakInput.value;

    if (znak == null) {
        rezultat.innerText = '';
    }

    if (prviBroj && drugiBroj) {
        switch (znak) {
            case '+': rezultat.innerText = prviBroj + drugiBroj; break;
            case '-': rezultat.innerText = prviBroj - drugiBroj; break;
            case '*': rezultat.innerText = prviBroj * drugiBroj; break;
            case '/': rezultat.innerText = prviBroj / drugiBroj; break;
            default: rezultat.innerText = 'ERR'; break;
        }
    } else if (prviBroj) {
        rezultat.innerText = prviBroj;
    } else if (drugiBroj) {
        rezultat.innerText = drugiBroj;
    }

}

prviBrojInput.oninput = function () {
    izracunajRezultat();
}

drugiBrojInput.oninput = function () {
    izracunajRezultat();
}

znakInput.oninput = function () {
    if (!allowedSymbols.includes(znakInput.value)) {
        console.log('Symbol nije validan');
        znakInput.value = '';
    } else {
        izracunajRezultat();
    }
}

deleteButton.onclick = function () {
    prviBrojInput.value = '';
    drugiBrojInput.value = '';
    znakInput.value = '';
    rezultat.value = '';
}