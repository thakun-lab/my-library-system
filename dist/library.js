"use strict";
// src/library.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBooks = searchBooks;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
const books = [];
// ฟังก์ชันเพิ่มหนังสือ
function addBook(book) {
    books.push(book);
}
// ฟังก์ชันแสดงรายการหนังสือ
function listBooks() {
    books.forEach(book => {
        console.log(`${book.title} by ${book.author}`);
    });
}
// ฟังก์ชันค้นหาหนังสือ
function searchBooks(title) {
    return books.find(book => book.title.toLowerCase() === title.toLowerCase());
}
// ฟังก์ชันอัปเดตหนังสือ
function updateBook(id, updatedFields) {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        books[bookIndex] = Object.assign(Object.assign({}, books[bookIndex]), updatedFields);
    }
}
// ฟังก์ชันลบหนังสือ
function deleteBook(id) {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }
}
