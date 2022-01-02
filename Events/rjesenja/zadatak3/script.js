const kvadrat = document.getElementById('kvadrat');
let leftPosition = 0;
let topPosition = 0;

window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // ArrowLeft
            leftPosition -= 20;
            kvadrat.style.left = `${leftPosition}px`;
            break;
        case 39: // ArrowRight
            leftPosition += 20;
            kvadrat.style.left = `${leftPosition}px`;
            break;
        case 38: // ArrowUp
            topPosition -= 20;
            kvadrat.style.top = `${topPosition}px`;
            break;
        case 40: // ArrowDown
            topPosition += 20;
            kvadrat.style.top = `${topPosition}px`;
            break;
    }
}

kvadrat.onclick = function () {
    kvadrat.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}