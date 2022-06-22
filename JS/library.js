let myLibrary = [];
const DEFAULT_DATA = [
    { name:"Jujutusu Kaisen", author: "Gege Akutami", pages: "192 pages", read:"Read upto Volume 11" },
    { name:"Hunter x Hunter", author: "Yoshihiro Togashi", pages: "192 pages", read:"Have not read yet" },
    { name:"Orphan X", author: "Gregg Hurwitz", pages: "368 pages", read:"Have read" }
];

const $name = document.querySelector("#book-name");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#Pages");
const $readStatus = document.querySelector("#read-status");
const $tableBody = document.querySelector("#book-table-body");

const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
  });


function addBookToLibrary () {
    document.querySelector("#book-name")
    document.querySelector("#author")
    document.querySelector("#Pages")
    document.querySelector("#read-status")
}

const $table = document
  .querySelector("table")
  .addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML == "delete") {
      if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
        deleteBook(findBook(library, currentTarget.innerText));
    }
    if (e.target.classList.contains("status-button")) {
      changeStatus(findBook(library, currentTarget.innerText));
    }
    updateLocalStorage();
    render();
  });

  function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

function addBookToLibrary() {
  if ($name.value.length === this.name || $author.value.length === this.author) {
    alert("Please, fill all the fields");
    return;
  }
  const newBook = new Book($name.value, $author.value, $status.value);

  library.push(newBook);
  updateLocalStorage();
}
function changeStatus(book) {
  if (library[book].status === "read") {
    library[book].status = "not read";
  } else library[book].status = "read";
}
function deleteBook(currentBook) {
  library.splice(currentBook, currentBook + 1);
}
function findBook(libraryArray, name) {
  if (libraryArray.length === 0 || libraryArray === null) {
    return;
  }
  for (book of libraryArray)
    if (book.name === name) {
      return libraryArray.indexOf(book);
    }
}
function clearForm() {
  $name.value = "";
  $author.value = "";
}
function updateLocalStorage() {
  localStorage.setItem("library", JSON.stringify(library));
  //library = JSON.parse(localStorage.getItem("library"));
}
function checkLocalStorage() {
  if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"));
  } else {
    library = DEFAULT_DATA;
  }
}

function render() {
  checkLocalStorage();
  $tableBody.innerHTML = "";
  library.forEach((book) => {
    const htmlBook = `
      <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `;
    $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

render();
function render() {
  checkLocalStorage();
  $tableBody.innerHTML = "";
  library.forEach((book) => {
    const htmlBook = `
      <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `;
    $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

render();
