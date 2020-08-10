import { Controller, Get } from '@nestjs/common';
import { Book, BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get('/books')
  getAllBooks(): Book[] {
    return this.bookService.gerAllAllBooks();
  }
}
