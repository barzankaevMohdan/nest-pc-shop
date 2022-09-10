import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CaseController } from './case.controller';
import { Case } from './case.model';
import { CaseService } from './case.service';

@Module({
  providers: [CaseService],
  controllers: [CaseController],
  imports: [
    SequelizeModule.forFeature([Case]),
  ],
})
export class CaseModule {}
