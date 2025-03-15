
const counterDiv = document.getElementById('counter');
const resetBtn = document.getElementById('reset');

// create p and add it to div
const createdP = document.createElement('p');
createdP.style.position = 'absolute';
createdP.style.top = '35%';
createdP.style.textAlign = 'center';
createdP.style.fontSize = '20px';
counterDiv.appendChild(createdP);


let counter = 0;

counterDiv.onclick = function () {
    counter++;
    createdP.innerText = `Kliknuto ${counter} puta`;
}

resetBtn.onclick = function () {
    counter = 0;
    createdP.innerText = '';
}