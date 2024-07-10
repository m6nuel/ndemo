import { Role } from 'src/auth/enums/rol.enum';
import { Tema } from 'src/tema/entities/tema.entity';
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
  user: User[];
  @Column({ type: 'enum', default: Role.User, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deleted: Date;
}
