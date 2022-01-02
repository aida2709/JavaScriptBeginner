const kalkulator = document.getElementById('kalkulator');
let rezultat = document.getElementById('result');
let calculationArea = document.getElementById('area');

const symbols = ['+', '-', '*', '/'];


function doCalculation() {
    let calculation = calculationArea.innerText;
    let index = -1;
    let firstNumber, secondNumber, operation;

    symbols.forEach(symbol => {
        if (index === -1) {
            index = calculation.indexOf(symbol);
        }
    });

    if (index !== -1) {
        firstNumber = parseFloat(calculation.substring(0, index));
        secondNumber = parseFloat(calculation.substring(index + 1));
        operation = calculation.substring(index, index + 1);

        switch (operation) {
            case '+': rezultat.innerText = firstNumber + secondNumber; break;
            case '-': rezultat.innerText = firstNumber - secondNumber; break;
            case '*': rezultat.innerText = firstNumber * secondNumber; break;
            case '/': rezultat.innerText = firstNumber / secondNumber; break;
            default: rezultat = 'ERR'; break;
        }
    }

}

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        if (rezultat.innerText.length > 0) {
            return;
        }

        if (item.value === '=') {
            doCalculation();
        } else if (item.value === 'del') {
            calculationArea.innerText = '';
            rezultat.innerText = '';
        } else {
            calculationArea.innerText += item.value;
        }
    })
});