import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Beef {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column('int')
  props: number;

  @Column('date')
  createdOn: string;

  @Column()
  isPublished: boolean;
}