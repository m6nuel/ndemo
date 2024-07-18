import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    // const email = this.findByEmail(createUserDto.email);
    // if (!email) {
    return await this.userRepository.save(createUserDto);
    // }
    // throw new BadRequestException('El usuario ya existe');
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new BadRequestException('usuario no existe');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }

  async findByEmail(email: string) {
    const em = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'name', 'image', 'role', 'deleted'],
    });
    return em;
  }
}
