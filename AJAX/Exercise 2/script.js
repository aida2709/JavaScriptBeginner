// 1. nacin - losiji

// const showDogButton = document.getElementById("showDogBtn");

// showDogButton.onclick = () => {
//   showDogButton.classList.remove("btn-success");
//   showDogButton.classList.add("btn-danger");

//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((response) => {
//       const image = document.createElement("img");
//       image.setAttribute("src", response.message);
//       image.classList.add("dog-image");
//       document.body.appendChild(image);
//     })
//     .catch((error) => {
//       console.error("Api request has failed", error);
//     })
//     .finally(() => {
//       showDogButton.classList.add("btn-success");
//       showDogButton.classList.remove("btn-danger");
//     });
// };

// 2. nacin - bolji
const showDogButton = document.getElementById("showDogBtn");

const disableButton = () => {
  showDogButton.classList.remove("btn-success");
  showDogButton.classList.add("btn-danger");
};

const enableButton = () => {
  showDogButton.classList.add("btn-success");
  showDogButton.classList.remove("btn-danger");
};

const generateImage = (url) => {
  const image = document.createElement("img");
  image.setAttribute("src", url);
  image.classList.add("dog-image");
  document.body.appendChild(image);
};

const fetchDogImage = () =>
  fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  );

showDogButton.onclick = () => {
  disableButton();
  fetchDogImage()
    .then((response) => {
      generateImage(response.message);
    })
    .catch((error) => {
      console.error("Api request has failed", error);
    })
    .finally(() => {
      enableButton();
    });
};
