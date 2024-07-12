import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from '../common/interface/userActive.interface';
import { Role } from '../common/enums/rol.enum';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  async create(createTemaDto: CreateTemaDto, user: UserActiveInterface) {
    return await this.temaRepository.save({
      ...createTemaDto,
      userId: user.id,
    });
  }

  async findAll(user: UserActiveInterface) {
    if (user.role === Role.Admin) {
      return await this.temaRepository.find();
    }

    const userfinded = await this.temaRepository.find({
      where: { userId: user.id },
    });
    return userfinded;
  }

  async findOne(id: number, user: UserActiveInterface) {
    const tema = await this.temaRepository.findOneBy({ id });
    if (!tema) {
      throw new BadRequestException('No existe');
    }
    if (user.role !== Role.Admin && tema.userId !== user.id) {
      throw new UnauthorizedException('acceso denegado');
    }
    return tema;
  }

  async update(
    id: number,
    updateTemaDto: UpdateTemaDto,
    user: UserActiveInterface,
  ) {
    const tema = await this.findOne(id, user);
    if (user.role !== Role.Admin && tema.userId !== user.id) {
      throw new UnauthorizedException('acceso denegado');
    }
    return await this.temaRepository.update(id, updateTemaDto);
  }

  async remove(id: number, user: UserActiveInterface) {
    const tema = await this.findOne(id, user);
    if (user.role !== Role.Admin && tema.userId !== user.id) {
      throw new UnauthorizedException('acceso denegado');
    }
    return await this.temaRepository.softDelete(id);
  }
}
