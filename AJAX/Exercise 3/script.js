// 1st way - not so good

// const activityButton = document.getElementById("activityButton");
// const tableBody = document.querySelector('tbody');

// activityButton.onclick = () => {
//   fetch("https://www.boredapi.com/api/activity")
//     .then((response) => response.json())
//     .then((response) => {
//         const row = document.createElement('tr');

//         const activityCell = document.createElement('td');
//         activityCell.innerText = response.activity;
//         row.appendChild(activityCell);

//         const participantsCell = document.createElement('td');
//         participantsCell.innerText = response.participants;
//         row.appendChild(participantsCell);

//         const typeCell = document.createElement('td');
//         typeCell.innerText = response.type;
//         row.appendChild(typeCell);

//         const priceCell = document.createElement('td');
//         priceCell.innerText = response.price;
//         row.appendChild(priceCell);

//         tableBody.appendChild(row);
//     })
//     .catch((error) => {
//       console.error("Api request has failed", error);
//     });
// };

// 2nd way - better
const activityButton = document.getElementById("activityButton");
const tableBody = document.querySelector("tbody");

const generateTableCell = (text) => {
  const cell = document.createElement("td");
  cell.innerText = text;
  return cell;
};

const generateTableRowWithCells = (properties, data) => {
  const row = document.createElement("tr");

  properties.forEach((prop) => {
    row.appendChild(generateTableCell(data[prop]));
    // OR:
    // const value = data[prop];
    // const cell = generateTableCell(value);
    // row.appendChild(cell);
  });

  return row;
};

const renderRandomThing = (data) => {
  const properties = ["activity", "participants", "type", "price"];
  const row = generateTableRowWithCells(properties, data);
  tableBody.appendChild(row);
};

const fetchRandomThing = () =>
  fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json());

activityButton.onclick = () => {
  fetchRandomThing()
    .then((response) => {
      renderRandomThing(response);
    })
    .catch((error) => {
      console.error("Api request has failed", error);
    });
};
