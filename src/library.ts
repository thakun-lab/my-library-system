import { Book } from './Book';

const books: Book[] = [];

export function addBook(book: Book): void {
  books.push(book);
}

export function listBooks(): void {
  books.forEach(book => {
    console.log(`${book.title} by ${book.author}`);
  });
}

export function searchBooks(title: string): Book | undefined {
  return books.find(book => book.title.toLowerCase() === title.toLowerCase());
}

export function updateBook(id: number, updatedFields: Partial<Book>): void {
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...updatedFields };
  }
}

export function deleteBook(id: number): void {
  const bookIndex = books.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
  }
}
