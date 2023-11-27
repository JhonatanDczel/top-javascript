function Book(title = "No title", author = "No author", pages = 0, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read === true ? "already read" : "not read yet"}.`;
  };
}

const book1 = new Book();
const book2 = new Book("My pobre angelito", "no se", 34, false);

console.log(book1.info() + "\n" + book2.info());
