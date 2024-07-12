import { Hist } from '../../hist/entities/hist.entity';
import { User } from '../../user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @Column()
  userId: number;

  @DeleteDateColumn()
  deleted: string;
}
