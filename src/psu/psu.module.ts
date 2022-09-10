import { Module } from '@nestjs/common';
import { PsuService } from './psu.service';
import { PsuController } from './psu.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Psu } from './psu.model';

@Module({
  providers: [PsuService],
  controllers: [PsuController],
  imports: [
    SequelizeModule.forFeature([Psu]),
  ],
})
export class PsuModule {}
