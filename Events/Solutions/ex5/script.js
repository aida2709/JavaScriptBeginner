const input = document.getElementById('text');


input.onfocus = function () {
    input.style.color = 'red';
    input.style.backgroundColor = 'white';
}

input.onblur = function () {
    input.style.color = 'yellow';
    input.style.backgroundColor = 'green';
}

input.onkeyup = function(){
    if(input.value.toLowerCase() === 'javascript'){
        alert('Welcome to JS course!');
    }
}

input.onselect = function(){
    input.style.backgroundColor = 'blue';

}