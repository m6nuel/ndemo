import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHistDto } from './dto/create-hist.dto';
import { UpdateHistDto } from './dto/update-hist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hist } from './entities/hist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistService {
  constructor(
    @InjectRepository(Hist)
    private readonly histRepository: Repository<Hist>,
  ) {}

  async create(createHistDto: CreateHistDto) {
    return await this.histRepository.save(createHistDto);
  }

  async findAll() {
    return await this.histRepository.find();
  }

  async findOne(id: number) {
    const hist = await this.histRepository.findOneBy({ id });

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
