export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    publishedYear: number;
    availability: boolean;
  }
  
  export enum Genre {
    Fiction = 'Fiction',
    NonFiction = 'Non-Fiction',
    ScienceFiction = 'Science Fiction',
    Fantasy = 'Fantasy',
    Biography = 'Biography'
  }
  