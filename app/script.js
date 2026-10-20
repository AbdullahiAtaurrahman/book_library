console.log("Hello there!");

const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw new Error("Book must be called with new");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("Lord of the rings", "R. R. Tolkien", "219", "Read");
addBookToLibrary("Things fall apart", "Chinua Achebe", "219", "Read");
addBookToLibrary("Americana", "Chimamanda", "219", "Read");
addBookToLibrary("Enjoy your life", "Areefy", "219", "Read");

const container = document.querySelector(".container");
const bookContainer = document.querySelector(".library-container");

function showBook() {
  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");

    bookItem.innerHTML = `
    <div class="book-details">
          <div class="book-info">
            <h2 class="title">${book.title}</h2>
            <p class="author">${book.author}</p>
          </div>
          <div class="book-info-2">
            <p class="pages">${book.pages} pages</p>
            <p class="read">${book.read}</p>
          </div>
         </div>
        <button class="delete-btn" data-id="${book.id}">&times;</button>`;

    bookContainer.appendChild(bookItem);
  });
}

showBook();
