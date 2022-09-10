import { Module } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { GpuController } from './gpu.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gpu } from './gpu.model';

@Module({
  providers: [GpuService],
  controllers: [GpuController],
  imports: [
    SequelizeModule.forFeature([Gpu]),
  ],
})
export class GpuModule {}
