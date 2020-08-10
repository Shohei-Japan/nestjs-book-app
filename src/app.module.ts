import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      charset: 'utf8mb4_unicode_ci',
      username: 'root',
      password: 'password',
      database: 'nestjs_book_api',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      migrations: ["dist/migrations/*{.ts,.js}"],
      migrationsTableName: "migrations_typeorm",
      migrationsRun: true,
    }),
    BooksModule
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
