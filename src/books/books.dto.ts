import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  pagesAmount: number;

  @IsNumber()
  pagesRead: number;
}
