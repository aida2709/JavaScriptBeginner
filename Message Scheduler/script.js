const scheduledMessages = [
    {
        id: 1,
        message: 'Kraj casa!',
        imageUrl: null,
        time: {
            hours: '00',
            minutes: '10',
            seconds: '00'
        }
    },
    {
        id: 1,
        message: 'Happy New Year!',
        imageUrl: 'https://www.homemade-gifts-made-easy.com/image-files/happy-new-year-images-2022-glitter-sparkles-1080x1080.png.pagespeed.ce.2QSJltCIj6.png',
        time: {
            hours: '00',
            minutes: '10',
            seconds: '05'
        }
    },

];

const columns = ['id', 'message', 'time'];

const tableBody = document.querySelector('.table tbody');// fetch <tbody></tbody> so we can append rows to it

function refreshList() {
    // Refresh student list:
    tableBody.innerHTML = ''; // remove old content
    generateStudentsList(); // render students again
}

function createNewTableRow(message) {
    const createdRow = document.createElement('tr');

    let cells = columns.map(column => {
        let cell = document.createElement('td');
        if (column === 'time') {
            cell.innerText = `${message.time.hours}:${message.time.minutes}:${message.time.seconds}`
        } else {
            cell.innerText = message[column];
        }
        return cell;
    });

    // Action cell (Start & Delete buttons)
    let cell = document.createElement('td');

    let startButton = document.createElement('button');
    startButton.innerText = 'Start';
    startButton.classList.add('btn', 'btn-success');

    startButton.onclick = function () {
        startSceduler(message);
    }
    cell.appendChild(startButton);


    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');

    deleteButton.onclick = function () {
        deleteMessage(message.id);
    }
    cell.appendChild(deleteButton);

    cells.push(cell);
    // Action cell END

    createdRow.append(...cells);
    tableBody.appendChild(createdRow);
}

function generateList() {
    scheduledMessages.forEach(message => {
        createNewTableRow(message);
    });
}




generateList();