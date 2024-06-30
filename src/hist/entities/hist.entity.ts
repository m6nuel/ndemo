import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
