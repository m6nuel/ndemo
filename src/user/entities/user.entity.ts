import { Role } from '../../common/enums/rol.enum';
import { Tema } from '../../tema/entities/tema.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  name: string;

  @OneToMany(() => Tema, (tema) => tema.user, {
    eager: true,
  })
  tema: Tema[];

  @Column({ type: 'enum', default: Role.User, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deleted: Date;
}
