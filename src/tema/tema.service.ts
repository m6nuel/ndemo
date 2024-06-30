import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  async create(createTemaDto: CreateTemaDto) {
    return await this.temaRepository.save(createTemaDto);
  }

  async findAll() {
    return await this.temaRepository.find();
  }

  async findOne(id: number) {
    const tema = await this.temaRepository.findOneBy({ id });
    if (!tema) {
      throw new BadRequestException('No existe');
    }
    return tema;
  }

  async update(id: number, updateTemaDto: UpdateTemaDto) {
    return await this.temaRepository.update(id, updateTemaDto);
  }

  async remove(id: number) {
    return await this.temaRepository.softDelete(id);
  }
}
