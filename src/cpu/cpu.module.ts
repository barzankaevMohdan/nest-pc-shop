import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CpuController } from './cpu.controller';
import { Cpu } from './cpu.model';
import { CpuService } from './cpu.service';

@Module({
  controllers: [CpuController],
  providers: [CpuService],
  imports: [
    SequelizeModule.forFeature([Cpu]),
  ],
})
export class CpuModule {}
