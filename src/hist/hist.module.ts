import { Module } from '@nestjs/common';
import { HistService } from './hist.service';
import { HistController } from './hist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hist } from './entities/hist.entity';
// import { TemaModule } from 'src/tema/tema.module';
import { TemaService } from 'src/tema/tema.service';
import { Tema } from 'src/tema/entities/tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hist, Tema])],
  controllers: [HistController],
  providers: [HistService, TemaService],
  exports: [TypeOrmModule],
})
export class HistModule {}
