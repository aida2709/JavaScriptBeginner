const setHexBtn = document.getElementById('setHexBtn');
const hexColorInput = document.getElementById('hexColor');
const coloredDiv = document.getElementById('coloredDiv');
const hexColorError = document.getElementById('hexColorError');


function colorizeDivHex(color) {
    coloredDiv.style.backgroundColor = color[0] !== '#' ? `#${color}` : color;
}

setHexBtn.onclick = function () {
    let color = hexColorInput.value;

    if (!color) {
        hexColorError.classList.remove('hide');
    } else {
        hexColorError.classList.add('hide');
        colorizeDivHex(color);
    }
}