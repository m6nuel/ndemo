import { Tema } from 'src/tema/entities/tema.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  img: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Tema, (tema) => tema.id)
  @JoinColumn({ name: 'temaId' })
  tema: Tema;

  @Column()
  temaId: number;
}
