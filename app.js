// Book Class: Represents a BOOK
  class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }

// UI Class: Handle UI Tasks

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'BOOK ONE',
        author: 'Lily Gomes',
        isbn: '9898989'
      },
      {
        title: 'BOOK TWO',
        author: 'Prety Zinta',
        isbn: '454000'
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));


  }

  static addBookToList(book) {

     const list = document.querySelector('#book-list');


     const row = document.createElement('tr');

     row.innerHTML = `
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     `;

     list.appendChild(row);

  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

  }
}
// Store Class: Handles Storage

// Event: Display BOOKS

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a BOOKS

document.querySelector('#book-form').addEventListener('submit', (e) => {

// Prevent actual submit

e.preventDefault();

  // Get form values

  const title = document.querySelector('#title').value;

  const author = document.querySelector('#author').value;

  const isbn = document.querySelector('#isbn').value;

// Instatiate books

const book = new Book(title, author, isbn);

 // console.log(book)

 // Add Book to UI :

 UI.addBookToList(book);

// Clear Fields ;

UI.clearFields();

});

// Event : Remove a BOOKS
