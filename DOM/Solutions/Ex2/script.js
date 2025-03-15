// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.
document.querySelector("#container")

// 3 - Select all of the list items with a class of "second".
document.getElementsByClassName("second")
// OR
document.querySelectorAll(".second")

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

// 5 - Give the p with an id of firstp the text "Hello!".
const foundP = document.querySelector("#firstP");
foundP.innerText = "Hello";

// 6 - Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer");
footer.classList.add("main");
// OR
footer.className += "main";

// 7 - Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8 - Create a new li element.
const newLi = document.createElement("li");

// 9 - Give the li the text "four".
newLi.innerText = "four"

// 10 - Append the li to the ul element.
const list = document.querySelector("ul");
list.appendChild(newLi);

// 11 - Loop over all of the list items inside the ol tag and give them a background color of "green".
const liInsideOl = document.querySelectorAll("ol li");
for (let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].style.backgroundColor = "green";
}

// 12 - Remove the div with a class of footer.
footer.remove();

