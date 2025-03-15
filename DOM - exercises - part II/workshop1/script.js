// a)
const list = document.querySelector('ul');
list.classList.add('list-group');

// b)
const listItems = document.querySelectorAll('li');
listItems.forEach(li => {
    li.classList.add('list-group-item');
});

// c) & d)
const index = Number(prompt('Enter the index number of the skill you are best at.'));
if (index < 0 || index >= listItems.length) {
    const error = document.createElement('h3');
    error.innerText = 'The index you entered is not valid.';
    error.classList.add('text-danger');
    document.body.appendChild(error);

} else {
    const theBestSkill = listItems[index];
    theBestSkill.classList.add('active');
}
