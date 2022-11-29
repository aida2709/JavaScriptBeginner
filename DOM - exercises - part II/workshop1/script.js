// a)
const list = document.querySelector('ul');
list.classList.add('list-group');

// b)
const listItems = document.querySelectorAll('li');
listItems.forEach(li => {
    li.classList.add('list-group-item');
});

// c) i d)
const index = Number(prompt('Unesite redni broj vjestine koju najbolje poznajete'));
if (index < 0 || index >= listItems.length) {
    const error = document.createElement('h3');
    error.innerText = 'Redni broj koji ste unijeli nije validan';
    error.classList.add('text-danger');
    document.body.appendChild(error);

} else {
    const theBestSkill = listItems[index];
    theBestSkill.classList.add('active');
}
