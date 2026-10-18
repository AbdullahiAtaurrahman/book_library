const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw new Error("Book must have called with new");
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
