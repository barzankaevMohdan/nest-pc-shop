import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Case } from './case.model';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CaseService {
  constructor(@InjectModel(Case) private caseModel: typeof Case) {}

  async createCase(dto: CreateCaseDto) {
    const data = await this.caseModel.create(dto)
    return data
  }

  async getAllCase() {
    const data = await this.caseModel.findAll({include: {all: true}})
    return data
  }

  async getCaseById(id: string) {
    const data = await this.caseModel.findOne({where: {id}, include: {all: true}})
    return data
  }

  async updateCase(id: string, dto: CreateCaseDto) {
    const data = await this.caseModel.update(dto, {where: {id}})
    return data
  }

  async deleteCase(id: string) {
    const data = await this.caseModel.destroy({where: {id}})
    return data
  }
}
