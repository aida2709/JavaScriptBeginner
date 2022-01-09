const prvi = document.getElementById('prvi');
const drugi = document.getElementById('drugi');
const dugme = document.getElementById('dugme');

dugme.addEventListener('click', function () {
    console.log('kliknuto dugme');
}, true);

prvi.addEventListener('click', function () {
    console.log('kliknut prvi div');
}, true);

drugi.addEventListener('click', function () {
    console.log('kliknut drugi div');
}, true);



