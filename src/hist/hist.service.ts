import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHistDto } from './dto/create-hist.dto';
import { UpdateHistDto } from './dto/update-hist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hist } from './entities/hist.entity';
import { Repository } from 'typeorm';
import { Tema } from 'src/tema/entities/tema.entity';

@Injectable()
export class HistService {
  constructor(
    @InjectRepository(Hist)
    private readonly histRepository: Repository<Hist>,
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  async create(createHistDto: CreateHistDto) {
    const tema = await this.temaRepository.findOne({
      where: { id: createHistDto.temaId },
    });
    if (!tema) {
      throw new BadRequestException('No se encontro el tema');
    }
    // const hist = await this.histRepository.create(createHistDto)
    return await this.histRepository.save({
      ...createHistDto,
      temaId: tema.id,
    });
  }

  async findAll() {
    return await this.histRepository.find({ relations: ['tema'] });
  }

  async findOne(id: number) {
    const hist = await this.histRepository.findOne({
      where: { id },
      relations: ['tema'],
    });

    if (!hist) {
      throw new BadRequestException('No existe');
    }

    return hist;
  }

  async update(id: number, updateHistDto: UpdateHistDto) {
    return await this.histRepository.update(id, updateHistDto);
  }

  async remove(id: number) {
    return await this.histRepository.softDelete(id);
  }
}
