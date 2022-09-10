import { Module } from '@nestjs/common';
import { PcService } from './pc.service';
import { PcController } from './pc.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pc } from './pc.model';
import { Case } from 'src/case/case.model';
import { Cooller } from 'src/cooller/cooller.model';
import { Cpu } from 'src/cpu/cpu.model';
import { Gpu } from 'src/gpu/gpu.model';
import { Motherboard } from 'src/motherboard/motherboard.model';
import { Psu } from 'src/psu/psu.model';
import { Ram } from 'src/ram/ram.model';
import { Ssd } from 'src/ssd/ssd.model';

@Module({
  providers: [PcService],
  controllers: [PcController],
  imports: [
    SequelizeModule.forFeature([Pc, Case, Cooller, Cpu, Gpu, Motherboard, Psu, Ram, Ssd]),
  ],
})
export class PcModule {}
