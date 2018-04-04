import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Beef {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column('int')
  props: number;

  @Column()
  isPublished: boolean;
}