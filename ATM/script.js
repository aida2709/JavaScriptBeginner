const users = [
    {
        firstName: 'Niko',
        lastName: 'Nikic',
        cardNumber: '123456',
        PIN: '0000'
    },
    {
        firstName: 'Test',
        lastName: 'Test',
        cardNumber: '789123',
        PIN: '1111'
    },
    {
        firstName: 'Miro',
        lastName: 'Miric',
        cardNumber: '654321',
        PIN: '2222'
    }
];

const cardNumberInput = document.getElementById('cardNumber');
const pinInput = document.getElementById('pin');
const loginBtn = document.getElementById('loginBtn');
const cardNumberError = document.getElementById('cardNumberError');
const pinError = document.getElementById('pinError');

function hideErrors() {
    cardNumberError.classList.add('hide'); pinError
    pinError.classList.add('hide'); pinError
}

function checkIsFormValid() {
    let isValid = true;
    hideErrors();

    if (!cardNumberInput.value) {
        cardNumberError.classList.remove('hide');
        isValid = false;
    }

    if (!pinInput.value) {
        pinError.classList.remove('hide');
        isValid = false;
    }

    return isValid;
}

loginBtn.onclick = function () {
    if (!checkIsFormValid()) {
        return;
    }

    const cardNum = cardNumberInput.value;
    const pin = pinInput.value;

    const foundUser = users.find((user) => user.cardNumber === cardNum && user.PIN === pin);

    if (foundUser) {
        console.log('uspjeh');
    } else {
        alert('Korisnicki podaci nisu ispravni!');
    }
}

