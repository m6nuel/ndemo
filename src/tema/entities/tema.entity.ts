import { Hist } from '../../hist/entities/hist.entity';
// import { User } from '../../user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  // JoinColumn,
  // ManyToOne,
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

  // @ManyToOne(() => User, (user) => user.email)
  // @JoinColumn({ name: 'userEmail' })
  // user: User;

  // @Column()
  // userEmail: string;

  @DeleteDateColumn()
  deleted: string;
}
