// a)
const akcijeDiv = document.getElementById('akcije');

// b)
const firstButton = document.createElement('button');
firstButton.innerText = 'Spremi';
firstButton.classList.add('btn', 'btn-success', 'mx-1');
akcijeDiv.appendChild(firstButton);


// c)
const secondButton = document.createElement('button');
secondButton.innerText = 'Obrisi';
secondButton.classList.add('btn', 'btn-danger', 'mx-1');
akcijeDiv.appendChild(secondButton);

// d)
const thirdButton = document.createElement('button');
thirdButton.innerText = 'Uredi';
thirdButton.classList.add('btn', 'btn-primary', 'mx-1');
akcijeDiv.appendChild(thirdButton);