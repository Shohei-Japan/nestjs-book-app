import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, charset: "utf8mb4", collation: 'utf8mb4_unicode_ci' })
  title: string;

  @Column({ charset: "utf8mb4", collation: 'utf8mb4_unicode_ci' })
  description: string;

  @Column()
  pagesAmount: number;

  @Column()
  pagesRead: number;
}