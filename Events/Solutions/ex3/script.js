const square = document.getElementById('square');
let leftPosition = 0;
let topPosition = 0;

window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // ArrowLeft
            leftPosition -= 20;
            square.style.left = `${leftPosition}px`;
            break;
        case 39: // ArrowRight
            leftPosition += 20;
            square.style.left = `${leftPosition}px`;
            break;
        case 38: // ArrowUp
            topPosition -= 20;
            square.style.top = `${topPosition}px`;
            break;
        case 40: // ArrowDown
            topPosition += 20;
            square.style.top = `${topPosition}px`;
            break;
    }
}

square.onclick = function () {
    square.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}