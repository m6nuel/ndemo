import { Hist } from 'src/hist/entities/hist.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tema: string;

  @OneToMany(() => Hist, (hist) => hist.tema, {
    eager: true,
  })
  hist: Hist[];

  @DeleteDateColumn()
  deleted: string;
}
