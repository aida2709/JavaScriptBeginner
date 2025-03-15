const container = document.querySelector('.container');
const years = Number(prompt('How old are you ?'));

const image = document.createElement('img');
let src;
image.classList.add('img-fluid');

if (years <= 0 || years > 120) {
    const errorMessage = document.createElement('h3');
    errorMessage.innerText = 'Years are not valid';
    errorMessage.classList.add('text-danger');
    container.appendChild(errorMessage);
} else if (years > 0 && years <= 5) {
    src = 'https://static.vecteezy.com/system/resources/previews/002/047/536/original/cute-baby-cat-illustration-vector.jpg';
} else if (years <= 18) {
    src = 'https://64.media.tumblr.com/bc6f54a2129ad9fc35d6965164bbeb9e/tumblr_pceawvswpm1rv5vrco1_1280.png';
} else if (years <= 65) {
    src = 'https://i.etsystatic.com/26211908/r/il/2daa6e/3558848506/il_fullxfull.3558848506_2ucz.jpg';
} else {
    src = 'https://www.shutterstock.com/image-vector/old-cat-isolated-grandpa-vector-260nw-2211084593.jpg';
}

if (src) {
    image.setAttribute('src', src);
    container.appendChild(image);
}