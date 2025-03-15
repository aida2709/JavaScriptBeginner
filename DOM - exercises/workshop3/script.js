const title = prompt("Unesite titulu").toLowerCase();

const actionsDiv = document.getElementById("akcije");

const firstButton = document.createElement("button");
firstButton.innerText = "Spremi";
firstButton.classList.add("btn", "btn-success", "mx-1");

const secondButton = document.createElement("button");
secondButton.innerText = "Obrisi";
secondButton.classList.add("btn", "btn-danger", "mx-1");

const thirdButton = document.createElement("button");
thirdButton.innerText = "Uredi";
thirdButton.classList.add("btn", "btn-primary", "mx-1");

if (title === "admin") {
  actionsDiv.appendChild(firstButton);
  actionsDiv.appendChild(secondButton);
  actionsDiv.appendChild(thirdButton);
} else if (title === "operator") {
  actionsDiv.appendChild(firstButton);
  actionsDiv.appendChild(thirdButton);
} else if (title === "student") {
  actionsDiv.appendChild(thirdButton);
} else {
  const heading = document.createElement("h1");
  heading.innerText = "Niste autorizovani";
  heading.style.color = "red";
  document.body.appendChild(heading);
}
