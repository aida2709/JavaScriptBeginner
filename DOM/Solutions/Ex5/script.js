const heading = document.createElement('h1');
heading.innerText = 'My Book List';

document.body.appendChild(heading);

const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654'
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: 'https://www.amazon.com/Most-Human-Artificial-Intelligence-Teaches/dp/0307476707/ref=sr_1_1?crid=3UZKZQ89MUQL&keywords=The+Most+Human+Human&qid=1641049831&s=books&sprefix=the+most+human+human%2Cstripbooks-intl-ship%2C225&sr=1-1'
    },
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        alreadyRead: true,
        url: 'https://www.amazon.com/Book-Thief-Markus-Zusak/dp/0375842209/ref=sr_1_1?crid=1XG08069AOI5D&keywords=The+Book+Thief&qid=1641049848&s=books&sprefix=the+book+thief%2Cstripbooks-intl-ship%2C216&sr=1-1'
    }
];

const list = document.createElement('ul');
const listItems = books.map(book => {
    const li = document.createElement('li');
    li.innerHTML = `<a href=${book.url}>${book.title} - ${book.author}</a>`
    if (book.alreadyRead) {
        li.style.backgroundColor = 'yellow';
    }
    return li;
});

list.append(...listItems);

document.body.appendChild(list);


