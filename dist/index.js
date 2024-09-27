"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const Book_1 = require("./Book");
// สร้างตัวอย่างหนังสือ
const book1 = {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: Book_1.Genre.Fiction,
    publishedYear: 1925,
    availability: true
};
const book2 = {
    id: 2,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: Book_1.Genre.NonFiction,
    publishedYear: 2011,
    availability: true
};
// เพิ่มหนังสือใหม่ 5 เล่ม
const book3 = {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: Book_1.Genre.Fiction,
    publishedYear: 1960,
    availability: true
};
const book4 = {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    genre: Book_1.Genre.Fiction,
    publishedYear: 1949,
    availability: true
};
const book5 = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: Book_1.Genre.Fiction,
    publishedYear: 1813,
    availability: true
};
const book6 = {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: Book_1.Genre.Fiction,
    publishedYear: 1951,
    availability: true
};
const book7 = {
    id: 7,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: Book_1.Genre.Fantasy,
    publishedYear: 1937,
    availability: true
};
// เพิ่มหนังสือทั้งหมดลงในระบบ
(0, library_1.addBook)(book1);
(0, library_1.addBook)(book2);
(0, library_1.addBook)(book3);
(0, library_1.addBook)(book4);
(0, library_1.addBook)(book5);
(0, library_1.addBook)(book6);
(0, library_1.addBook)(book7);
// แสดงรายการหนังสือ
console.log("Books in library:");
(0, library_1.listBooks)();
// ค้นหาหนังสือ
const foundBook = (0, library_1.searchBooks)('Sapiens');
console.log("Found book:", foundBook);
// อัปเดตหนังสือ
(0, library_1.updateBook)(1, { availability: false });
console.log("Updated book list:");
(0, library_1.listBooks)();
// ลบหนังสือ
(0, library_1.deleteBook)(1);
console.log("Books after deletion:");
(0, library_1.listBooks)();
