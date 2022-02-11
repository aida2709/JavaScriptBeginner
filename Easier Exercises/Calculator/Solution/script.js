const prviBrojInput = document.getElementById('prviBroj');
const drugiBrojInput = document.getElementById('drugiBroj');
const znakInput = document.getElementById('znak');
const claculateButton = document.getElementById('calculateBtn');
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
    else if (prviBroj && drugiBroj) {
        switch (znak) {
            case '+': rezultat.innerText = prviBroj + drugiBroj; break;
            case '-': rezultat.innerText = prviBroj - drugiBroj; break;
            case '*': rezultat.innerText = prviBroj * drugiBroj; break;
            case '/': rezultat.innerText = prviBroj / drugiBroj; break;
            default: rezultat.innerText = 'ERR'; break;
        }
    }
}

claculateButton.onclick = function () {
    izracunajRezultat();
}

znakInput.oninput = function () {
    if (znakInput.value.length > 1) { // ako neko unese dva znaka npr ++ ili +-
        znakInput.value = znakInput.value[0];
    }
    else if (!allowedSymbols.includes(znakInput.value)) {
        console.log('Symbol nije validan');
        znakInput.value = '';
    }
}

deleteButton.onclick = function () {
    prviBrojInput.value = '';
    drugiBrojInput.value = '';
    znakInput.value = '';
    rezultat.innerText = '';
}