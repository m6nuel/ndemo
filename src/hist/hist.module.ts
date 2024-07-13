import { Module } from '@nestjs/common';
import { HistService } from './hist.service';
import { HistController } from './hist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hist } from './entities/hist.entity';
import { TemaService } from '../tema/tema.service';
// import { Tema } from 'src/tema/entities/tema.entity';
import { TemaModule } from '../tema/tema.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hist]), TemaModule, AuthModule],
  controllers: [HistController],
  providers: [HistService, TemaService],
  exports: [TypeOrmModule],
})
export class HistModule {}
