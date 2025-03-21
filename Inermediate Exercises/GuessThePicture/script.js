const items = [
    {
        image: './images/cat.png',
        answers: ['cat', 'kitty']
    },
    {
        image: './images/dog.jpeg',
        answers: ['dog']
    },
    {
        image: './images/tree.png',
        answers: ['tree', 'scape']
    },
    {
        image: './images/laptop.webp',
        answers: ['laptop', 'computer']
    },
    {
        image: './images/bird.png',
        answers: ['bird', 'birds']
    }
];

const image = document.getElementById('image');
const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const answerInput = document.getElementById('answerInput');
const result = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');

let currentItemIndex;
let score;

function loadCurrentItem() {
    let item = items[currentItemIndex];
    image.setAttribute('src', item.image);
}

function startQuiz() {
    currentItemIndex = 0;
    score = 0;
    loadCurrentItem();
};

function calculateScore() {
    let answer = answerInput.value;
    let item = items[currentItemIndex];

    if (item.answers.includes(answer.toLowerCase())) {
        score++;
    }
}

function showScore() {
    result.innerText = `You score is ${score}`;
    result.classList.remove('hide');
}

nextBtn.onclick = function () {
    calculateScore();
    answerInput.value = '';

    if (currentItemIndex === (items.length - 1)) { // last one
        showScore();
        return;
    }

    currentItemIndex++;
    loadCurrentItem();
}

restartBtn.onclick = function () {
    result.classList.add('hide');
    startQuiz();
}

startQuiz();