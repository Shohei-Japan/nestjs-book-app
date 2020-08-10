import { Injectable } from '@nestjs/common';
import { Book } from './books.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

export interface BookType {
  id: number;
  title: string;
  description: string;
  pagesAmount: number;
  pagesRead: number;
}

const books: Book[] = []

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async createBook(bookData: Partial<Book>): Promise<void> {
    await this.bookRepository.insert(bookData);
    return;
  }  

  gerAllBooks(): BookType[] {
    return [...books];
  }
}
