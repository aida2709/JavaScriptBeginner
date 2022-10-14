const titula = prompt('Unesite titulu');


const akcijeDiv = document.getElementById('akcije');

const firstButton = document.createElement('button');
firstButton.innerText = 'Spremi';
firstButton.classList.add('btn', 'btn-success', 'mx-1');


const secondButton = document.createElement('button');
secondButton.innerText = 'Obrisi';
secondButton.classList.add('btn', 'btn-danger', 'mx-1');

const thirdButton = document.createElement('button');
thirdButton.innerText = 'Uredi';
thirdButton.classList.add('btn', 'btn-primary', 'mx-1');

if (titula.toLowerCase() === 'admin') {
    akcijeDiv.appendChild(firstButton);
    akcijeDiv.appendChild(secondButton);
    akcijeDiv.appendChild(thirdButton);
}
else if (titula.toLowerCase() === 'operator') {
    akcijeDiv.appendChild(firstButton);
    akcijeDiv.appendChild(thirdButton);
}
else if (titula.toLowerCase() === 'student') {
    akcijeDiv.appendChild(thirdButton);
} else {
    const heading = document.createElement('h1');
    heading.innerText = 'Niste autorizovani';
    heading.style.color = 'red';
    document.body.appendChild(heading);
}