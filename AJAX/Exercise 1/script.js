// 1. nacin - los
// const getFactButton = document.getElementById("getFactBtn");

// getFactButton.onclick = () => {
//   fetch("https://catfact.ninja/facts")
//     .then((response) => response.json())
//     .then((response) => {
//         const list = document.createElement('ul');
//         list.classList.add('list-group');

//         response.data.forEach((el) => {
//             const listItem = document.createElement('li');
//             listItem.innerText = el.fact;
//             listItem.classList.add('list-group-item');
//             list.appendChild(listItem);
//         });

//         document.body.appendChild(list);
//     })
//     .catch((error) => {
//       console.error("Request has failed", error);
//     });
// };

//2. nacin bolji
const getFactButton = document.getElementById("getFactBtn");

generateFactsList = (facts) => {
  const list = document.createElement("ul");
  list.classList.add("list-group");

  facts.forEach((el) => {
    const listItem = document.createElement("li");
    listItem.innerText = el.fact;
    listItem.classList.add("list-group-item");
    list.appendChild(listItem);
  });

  document.body.appendChild(list);
};

const getCatFacts = () => fetch("https://catfact.ninja/facts")
.then((response) => response.json());

getFactButton.onclick = () => {
  getCatFacts()
    .then((response) => {
      generateFactsList(response.data);
    })
    .catch((error) => {
      console.error("Request has failed", error);
    });
};
