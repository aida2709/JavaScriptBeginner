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
const addTaskModal = document.getElementById('addModal');
const addTaskButton = document.getElementById('addTaskBtn');
const closeModalButton = document.getElementById('closeBtn');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const titleError = document.getElementById('titleError');
const saveButton = document.getElementById('saveBtn');

function getRandomId() {
    return Math.floor(Math.random() * 100);
}

function refreshList() {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    renderTasks();
}

function finishTask(taskId) {
    const foundTaskIndex = tasks.findIndex((obj => obj.id == taskId));
    if (foundTaskIndex !== -1) {
        tasks[foundTaskIndex].finished = true;
        refreshList();
    } else {
        console.log(`Task with id ${taskId} not found.`);
    }
}

function deleteTask(taskId){
    const foundTaskIndex = tasks.findIndex((obj => obj.id == taskId));
    if (foundTaskIndex !== -1) {
        tasks.splice(foundTaskIndex, 1);
        refreshList();
    } else {
        console.log(`Task with id ${taskId} not found.`);
    }
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
        const cardBody = card.querySelector('.card-body');
        const deleteButton = document.createElement('a');
        deleteButton.innerText = 'Obrisi';
        deleteButton.setAttribute('href', '#');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.onclick = function () {
            deleteTask(task.id);
        }
        cardBody.appendChild(deleteButton);

        doneList.appendChild(card);
    } else {
        const cardBody = card.querySelector('.card-body');
        const finishButton = document.createElement('a');
        finishButton.innerText = 'Zavrsi';
        finishButton.setAttribute('href', '#');
        finishButton.classList.add('btn', 'btn-primary');
        finishButton.onclick = function () {
            finishTask(task.id);
        }
        cardBody.appendChild(finishButton);

        todoList.appendChild(card);
    }
}

function renderTasks() {
    tasks.forEach(task => {
        appendTaskToList(task);
    });
}

function openModal() {
    addTaskModal.classList.add('show');
    addTaskModal.style.display = 'block';
}

function closeModal() {
    addTaskModal.classList.remove('show');
    addTaskModal.style.display = 'none';
    cleanUpForm();
}

function saveNewTask(task) {
    tasks.push(task);

    refreshList();
}

function cleanUpForm() {
    titleError.classList.add('hide');

    titleInput.value = '';
    contentInput.value = '';
}

function checkIsFormValid() {
    if (!titleInput.value) {
        titleError.classList.remove('hide');
        return false;
    } else {
        titleError.classList.add('hide');
        return true;
    }
}

renderTasks();


addTaskButton.onclick = function () {
    openModal();
}

closeModalButton.onclick = function () {
    closeModal();
}

saveButton.onclick = function () {
    if (!checkIsFormValid()) {
        return;
    }
    saveNewTask({
        id: getRandomId(),
        title: titleInput.value,
        content: contentInput.value,
        finished: false
    });
    closeModal();
}