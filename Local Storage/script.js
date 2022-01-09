localStorage.setItem('theme', 'light');

let savedTheme = localStorage.getItem('theme');
console.log('savedTheme', savedTheme);
localStorage.removeItem('theme');
savedTheme = localStorage.getItem('theme');
console.log('savedTheme', savedTheme); // biti ce null
localStorage.clear();


const user = {
    name: 'John Doe',
    age: 18
};

localStorage.setItem('user', JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem('user') || {});
console.log('savedUser', savedUser);



