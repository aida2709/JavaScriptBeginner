const columns = ["id", "title", "authors"];
const tableBody = document.querySelector(".table tbody"); // fetch <tbody></tbody> so we can append rows to it
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

const createNewTableRow = (book) => {
  const createdRow = document.createElement("tr");

  let cells = columns.map((column) => {
    let cell = document.createElement("td");
    cell.innerText = book[column];
    return cell;
  });

  createdRow.append(...cells);
  tableBody.appendChild(createdRow);
};

const generateList = (bookArray) => {
  tableBody.innerHTML = ""; // remove old content

  bookArray.forEach((bookArray) => {
    createNewTableRow(bookArray);
  });
};

const enableSearchButton = () => {
  searchBtn.removeAttribute("disabled");
};

const disableSearchButton = () => {
  searchBtn.setAttribute("disabled", "true");
};

const getBooksFromApi = (queryParams = "") =>
  fetch(`https://gutendex.com/books/${queryParams}`).then((res) => res.json());

const loadBooks = (queryParams = "") => {
  disableSearchButton();
  getBooksFromApi(queryParams)
    .then((response) => {
      const books = response.results.map((book) => ({
        id: book.id,
        title: book.title,
        authors: book.authors.map((author) => author.name).join(),
      }));

      generateList(books);
      searchInput.value = ""; // clean up field only after api has finished
    })
    .catch((err) => {
      console.warn("api error", err);
    })
    .finally(() => {
      enableSearchButton();
    });
};

const onSearchBtnClicked = () => {
  const searchValue = searchInput.value?.toLowerCase();
  if (searchValue) {
    loadBooks(`?search=${searchValue}`);
  } else {
    loadBooks();
  }
};

searchBtn.onclick = onSearchBtnClicked;

// after web page is loaded, load all books from api
loadBooks();
