// Book Class: Represents a BOOK
  class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }

// UI Class: Handle UI Tasks

class UT {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'BOOK ONE',
        author: 'Lily Gomes',
        isbn: '465768'
      },
      {
        title: 'BOOK TWO',
        author: 'Preti Zinta',
        isbn: '4644448'
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
}
// Store Class: Handles Storage

// Event: Display BOOKS

// Event: Add a BOOKS

// Event : Remove a BOOKS
