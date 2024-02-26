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
