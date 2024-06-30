import { Module } from '@nestjs/common';
import { HistService } from './hist.service';
import { HistController } from './hist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hist } from './entities/hist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hist])],
  controllers: [HistController],
  providers: [HistService],
})
export class HistModule {}
