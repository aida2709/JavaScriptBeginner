const tasks = [
    {
        id: 1,
        title: 'Test',
        content: 'Test',
        finished: false
    },
    {
        id: 2,
        title: 'Test2',
        content: 'Test2',
        finished: true
    },
    {
        id: 3,
        title: 'Test3',
        content: 'Test3',
        finished: false
    },
];


const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

function finishTask(taskId) {
    console.log('zavrsi', taskId);
}

function appendTaskToList(task) {
    // check https://getbootstrap.com/docs/5.0/components/card/
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${task.title}</h5>
    <p class="card-text">${task.content}</p>
  </div>
    `;

    if (task.finished) {
        doneList.appendChild(card);
    } else {
        const cardBody = card.querySelector('.card-body');
        const zavrsiButton = document.createElement('a');
        zavrsiButton.innerText = 'Zavrsi';
        zavrsiButton.setAttribute('href', '#');
        zavrsiButton.classList.add('btn', 'btn-primary');
        zavrsiButton.onclick = function () {
            finishTask(task.id);
        }
        cardBody.appendChild(zavrsiButton);

        todoList.appendChild(card);
    }
}

function renderTasks() {
    tasks.forEach(task => {
        appendTaskToList(task);
    });
}

renderTasks();