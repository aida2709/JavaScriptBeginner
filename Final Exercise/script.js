const wordInput = document.getElementById("word");
const getButton = document.getElementById("getButton");
const phoneticParagraph = document.getElementById("phonetic");
const meaningsList = document.getElementById("meaningsList");

const clearResult = () => {
  meaningsList.innerText = "";
  phoneticParagraph.innerText = "";
};

const getMeaning = (word) => {
  clearResult();
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json())
    .then((response) => {
      const res = response[0];
      phoneticParagraph.innerText = `Phoentic: ${res.phonetic}`;

      res.meanings.forEach((meaning) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = meaning.definitions.map((def) => def.definition).join();
        meaningsList.appendChild(li);
      });
      wordInput.value = "";
    })
    .catch((error) => {
      console.error("API error", error);
    });
};

getButton.onclick = () => {
  const word = wordInput.value;

  if (word) {
    getMeaning(word);
  } else {
    alert("Please enter a word");
  }
};
