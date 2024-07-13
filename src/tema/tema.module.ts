import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Hist } from '../hist/entities/hist.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tema, Hist]), AuthModule],
  controllers: [TemaController],
  providers: [TemaService],
  exports: [TypeOrmModule],
})
export class TemaModule {}
