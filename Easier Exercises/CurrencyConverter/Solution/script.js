const valuta1Input = document.getElementById('valuta1');
const valuta2Input = document.getElementById('valuta2');
const calculateBtn = document.getElementById('calculateBtn');
const changeBtn = document.getElementById('changeBtn');
const error = document.getElementById('error');
const valuta1Label = document.getElementById('valuta1Label');
const valuta2Label = document.getElementById('valuta2Label');

let currentMode = 'BAM-EUR';

function doCalculation() {
    if (!valuta1Input.value) {
        error.classList.remove('hide');
        valuta2Input.value = '';
    } else {
        error.classList.add('hide');
        const valuta1 = parseFloat(valuta1Input.value);
        if (currentMode === 'BAM-EUR') {
            valuta2Input.value = valuta1 * 0.51;
        } else {
            valuta2Input.value = valuta1 * 1.96;
        }
    }
}

calculateBtn.onclick = doCalculation;

changeBtn.onclick = function () {
    if (currentMode === 'BAM-EUR') {
        currentMode = 'EUR-BAM';
        valuta1Label.innerText = 'EUR';
        valuta2Label.innerText = 'BAM';
    } else {
        currentMode = 'BAM-EUR'
        valuta1Label.innerText = 'BAM';
        valuta2Label.innerText = 'EUR';
    }
    doCalculation();
}

valuta1Input.oninput = function () {
    if (valuta1Input.value && isNaN(valuta1Input.value)) { // if entered value is not a number, delete laste entered character
        valuta1Input.value = valuta1Input.value.substring(0, valuta1Input.value.length - 1);
    }
}