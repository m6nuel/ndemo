import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Hist } from '../hist/entities/hist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tema, Hist])],
  controllers: [TemaController],
  providers: [TemaService],
  exports: [TypeOrmModule],
})
export class TemaModule {}
