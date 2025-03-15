// 1st way - not so good
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

//2nd way - better
const getFactButton = document.getElementById("getFactBtn");

const generateListItem = (fact) => {
  const listItem = document.createElement("li");
  listItem.innerText = fact;
  listItem.classList.add("list-group-item");
  return listItem;
}

const generateFactsList = (facts) => {
  const list = document.createElement("ul");
  list.classList.add("list-group");

  facts.forEach(({ fact }) => {
    list.appendChild(generateListItem(fact));
  });

  document.body.appendChild(list);
};

const getCatFacts = () => fetch("https://catfact.ninja/facts")
.then((response) => response.json());

getFactButton.onclick = () => {
  getCatFacts()
    .then(({ data }) => {
      generateFactsList(data);
    })
    .catch((error) => {
      console.error("Request has failed", error);
    });
};
