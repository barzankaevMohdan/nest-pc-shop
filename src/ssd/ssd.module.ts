import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SsdController } from './ssd.controller';
import { Ssd } from './ssd.model';
import { SsdService } from './ssd.service';

@Module({
  controllers: [SsdController],
  providers: [SsdService],
  imports: [
    SequelizeModule.forFeature([Ssd]),
  ],
})
export class SsdModule {}
