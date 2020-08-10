import { Injectable } from '@nestjs/common';

export interface Book {
  id: number;
  title: string;
  description: string;
  pagesAmount: number;
  pagesRead: number;
}

const books: Book[] = [
  {
    id: 1,
    title: 'hah',
    description: 'ssss',
    pagesAmount: 123,
    pagesRead: 11
  }
]

@Injectable()
export class BooksService {

  gerAllAllBooks(): Book[] {
    return [...books];
  }
}
