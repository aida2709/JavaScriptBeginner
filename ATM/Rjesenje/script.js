const users = [
    {
        firstName: 'Niko',
        lastName: 'Nikic',
        cardNumber: '123456',
        PIN: '0000',
        amount: 25000
    },
    {
        firstName: 'Test',
        lastName: 'Test',
        cardNumber: '789123',
        PIN: '1111',
        amount: 10000
    },
    {
        firstName: 'Miro',
        lastName: 'Miric',
        cardNumber: '654321',
        PIN: '2222',
        amount: 37000
    }
];

let currentUser = null;
const loginDiv = document.getElementById('login');
const homeDiv = document.getElementById('home');
const cardNumberInput = document.getElementById('cardNumber');
const pinInput = document.getElementById('pin');
const loginBtn = document.getElementById('loginBtn');
const cardNumberError = document.getElementById('cardNumberError');
const pinError = document.getElementById('pinError');
const cancelBtn = document.getElementById('cancelBtn');
const balanceBtn = document.getElementById('balanceBtn');
const balanceDiv = document.getElementById('balance');
const payoutBtn = document.getElementById('payoutBtn');
const payoutDiv = document.getElementById('payoutDiv');
const payoutActionBtn = document.getElementById('payoutActionBtn');
const amountToPayout = document.getElementById('amountToPayout');

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

function showHomePage() {
    loginDiv.classList.add('hide');
    homeDiv.classList.remove('hide');
    balanceDiv.classList.add('hide');
    payoutDiv.classList.add('hide');
}

function showLoginPage() {
    loginDiv.classList.remove('hide');
    homeDiv.classList.add('hide');
    balanceDiv.classList.add('hide');
    payoutDiv.classList.add('hide');
}

function cleanUpForm() {
    cardNumberInput.value = '';
    pinInput.value = '';
}

function showPayoutDiv() {
    balanceDiv.classList.add('hide');
    payoutDiv.classList.remove('hide');
}

function showBalanceDiv() {
    balanceDiv.classList.remove('hide');
    payoutDiv.classList.add('hide');
}

function isPayoutFormValid() {
    const amountToPayoutError = document.getElementById('amountToPayoutError');
    amountToPayoutError.classList.add('hide');

    if (!amountToPayout.value) {
        amountToPayoutError.classList.remove('hide');
        return false;
    }

    return true;
}

loginBtn.onclick = function () {
    if (!checkIsFormValid()) {
        return;
    }

    const cardNum = cardNumberInput.value;
    const pin = pinInput.value;

    const foundUser = users.find((user) => user.cardNumber === cardNum && user.PIN === pin);

    if (foundUser) {
        currentUser = foundUser;
        cleanUpForm();
        showHomePage();
    } else {
        alert('Korisnicki podaci nisu ispravni!');
    }
}

cancelBtn.onclick = function () {
    currentUser = null;
    showLoginPage();
}

balanceBtn.onclick = function () {
    showBalanceDiv();
    const balanceAmount = document.getElementById('balanceAmount');
    balanceAmount.innerText = `Stanje racuna iznosi ${currentUser.amount} KM`;
}

payoutBtn.onclick = function () {
    amountToPayout.value = '';
    showPayoutDiv();
}

payoutActionBtn.onclick = function () {
    if (!isPayoutFormValid()) {
        return;
    }
    const amount = parseFloat(amountToPayout.value);

    if (amount <= currentUser.amount) {
        currentUser.amount -= amount;
        amountToPayout.value = '';
        alert('Novac je uspjesno isplacen!');
    } else {
        alert('Nemate dovoljno sredstava na racunu!');
    }
}