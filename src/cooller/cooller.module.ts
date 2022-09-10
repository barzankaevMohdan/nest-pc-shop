import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoollerController } from './cooller.controller';
import { Cooller } from './cooller.model';
import { CoollerService } from './cooller.service';

@Module({
  controllers: [CoollerController],
  providers: [CoollerService],
  imports: [
    SequelizeModule.forFeature([Cooller]),
  ],
})
export class CoollerModule {}
