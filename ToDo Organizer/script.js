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
];


const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

function appendTaskToList(task) {
    const card = document.createElement('div');
    card.classList.add('card');

    console.log('uslo', task);

    card.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">${task.title}</h5>
    <p class="card-text">${task.content}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    `;

    if (task.finished) {
        doneList.appendChild(card);
    } else {
        todoList.appendChild(card);
    }
}

function renderTasks() {
    tasks.forEach(task => {
        appendTaskToList(task);
    });
}

renderTasks();