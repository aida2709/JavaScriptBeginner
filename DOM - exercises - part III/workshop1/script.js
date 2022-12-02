// a)
const rows = document.querySelectorAll('.row');

rows.forEach(row => {
    row.classList.add('gx-5');
});

// b)
const cols = document.querySelectorAll('.kolona');
cols.forEach(element => {
    element.classList.add('col');
});

// c)
const titles = document.querySelectorAll('h5');
titles.forEach(title => {
    title.classList.add('card-title');
});

// d)
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(element => {
    element.classList.add('card-text');
});

// e)
const buttons = document.querySelectorAll('.btn-apply');
buttons.forEach(button => {
    button.classList.add('btn', 'btn-success');
});