import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookType, BooksService } from './books.service';
import { CreateBookDTO } from './books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post('post')
  createBook(@Body() createBookDTO: CreateBookDTO) {
    this.bookService.createBook(createBookDTO);
    return;
  }

  @Get('')
  getAllBooks(): BookType[] {
    return this.bookService.gerAllBooks();
  }
}
