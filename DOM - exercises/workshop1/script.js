// a)
const naslov = document.getElementById('naslov');

naslov.classList.add('title');

// b)
const columns = document.getElementsByClassName('column');

for (let i = 0; i < columns.length; i++) {
    columns[i].classList.add('col-sm-6');
}

// c)
const subtitles = document.querySelectorAll('.subtitle');

subtitles.forEach(subtitle => {
    subtitle.classList.add('sub-title');
});

