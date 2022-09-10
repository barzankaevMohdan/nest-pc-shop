import { Module } from '@nestjs/common';
import { MotherboardService } from './motherboard.service';
import { MotherboardController } from './motherboard.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Motherboard } from './motherboard.model';

@Module({
  providers: [MotherboardService],
  controllers: [MotherboardController],
  imports: [
    SequelizeModule.forFeature([Motherboard]),
  ],
})
export class MotherboardModule {}
