import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePcDto } from './dto/create-pc.dto';
import { Pc } from './pc.model';

@Injectable()
export class PcService {
  constructor(@InjectModel(Pc) private pcModel: typeof Pc) {}

  async createPc(dto: CreatePcDto) {
    const data = await this.pcModel.create(dto)
    return data
  }

  async getAllPc() {
    const data = await this.pcModel.findAll({include: {all: true}})
    return data
  }

  async getPcById(id: string) {
    const data = await this.pcModel.findOne({where: {id}, include: {all: true}})
    return data
  }

  async updatePc(id: string, dto: CreatePcDto) {
    const {name, description, img, price} = dto
    const data = await this.pcModel.update({name, description, img, price}, {where: {id}})
    return data
  }

  async deletePc(id: string) {
    const data = await this.pcModel.destroy({where: {id}})
    return data
  }
}
