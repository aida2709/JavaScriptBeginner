// 1.
const titleElement = document.getElementById('title');
titleElement.innerText = 'Document Object Model';

// 2.
const listItems = document.getElementsByTagName('li');
console.log('listItems', listItems);

// 3.
const rows = document.getElementsByClassName('row');
console.log('rows', rows);

// 4.
const headings = document.getElementsByName('heading');
console.log('headings', headings);

// 5.
const firstLi = document.querySelector('li');
firstLi.innerText = 'Angular (framewok)';
// OR
// firstLi.innerText += ' (framework)';

// 6.
const allLiItems = document.querySelectorAll('li');

for (let i = 0; i < 3; i++) {
    if (i > 0) {
        allLiItems[i].innerText += ' (librabry)';
    }
}

// 7.
titleElement.style.color = 'violet';

// 8
const alert = document.getElementById('alert');
alert.classList.remove('alert-primary');
alert.classList.add('alert-success');
// OR
// alert.classList.replace('alert-primary', 'alert-success');

// 9
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerHTML = 'Next.js';
newLi.classList.add('list-group-item');
ul.appendChild(newLi);


