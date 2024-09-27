import { addBook, listBooks, searchBooks, updateBook, deleteBook } from './library';
import { Book, Genre } from './Book';

const book1: Book = {
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: Genre.Fiction,
  publishedYear: 1925,
  availability: true
};

const book2: Book = {
  id: 2,
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  genre: Genre.NonFiction,
  publishedYear: 2011,
  availability: true
};

const book3: Book = {
  id: 3,
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: Genre.Fiction,
  publishedYear: 1960,
  availability: true
};

const book4: Book = {
  id: 4,
  title: '1984',
  author: 'George Orwell',
  genre: Genre.Fiction,
  publishedYear: 1949,
  availability: true
};

const book5: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: Genre.Fiction,
  publishedYear: 1813,
  availability: true
};

const book6: Book = {
  id: 6,
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: Genre.Fiction,
  publishedYear: 1951,
  availability: true
};

const book7: Book = {
  id: 7,
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: Genre.Fantasy,
  publishedYear: 1937,
  availability: true
};

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);
addBook(book6);
addBook(book7);

console.log("Books in library:");
listBooks();

const foundBook = searchBooks('Sapiens');
console.log("Found book:", foundBook);

updateBook(1, { availability: false });
console.log("Updated book list:");
listBooks();

deleteBook(1);
console.log("Books after deletion:");
listBooks();