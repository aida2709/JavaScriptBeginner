const saveBtn = document.getElementById('saveBtn');
const firstNameErr = document.getElementById('imeError');
const lastNameErr = document.getElementById('prezimeError');
const yearsErr = document.getElementById('godineError');
const yearsInvalidError = document.getElementById('godineInvalidError');
const genderErr = document.getElementById('spolError');
const cityErr = document.getElementById('mjestoError');

function hideAllErrors() {
    firstNameErr.classList.add('hide');
    lastNameErr.classList.add('hide');
    yearsErr.classList.add('hide');
    yearsInvalidError.classList.add('hide');
    genderErr.classList.add('hide');
    cityErr.classList.add('hide');
}

function checkIsFormValid() {
    const firstName = document.getElementById('ime').value;
    const lastName = document.getElementById('prezime').value;
    const years = document.getElementById('godine').value;
    const gender = document.getElementById('spol').value;
    const city = document.getElementById('mjesto').value;
    let isValid = true;
    hideAllErrors();

    if (!firstName.length) {
        isValid = false;
        firstNameErr.classList.remove('hide');
    }

    if (!lastName.length) {
        isValid = false;
        lastNameErr.classList.remove('hide');
    }

    if (!years.length) {
        isValid = false;
        yearsErr.classList.remove('hide');
    } else if (isNaN(years)) {
        isValid = false;
        yearsInvalidError.classList.remove('hide');
    }

    if (!gender.length) {
        isValid = false;
        genderErr.classList.remove('hide');
    }

    if (!city.length) {
        isValid = false;
        cityErr.classList.remove('hide');
    }

    return isValid;
}



saveBtn.onclick = function () {
    if (checkIsFormValid()) {
        alert('Podaci uspjesno spremljeni!');
    }
};
