import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Case } from 'src/case/case.model'
import { Cooller } from 'src/cooller/cooller.model'
import { Cpu } from 'src/cpu/cpu.model'
import { Gpu } from 'src/gpu/gpu.model'
import { Motherboard } from 'src/motherboard/motherboard.model'
import { Psu } from 'src/psu/psu.model'
import { Ram } from 'src/ram/ram.model'
import { Ssd } from 'src/ssd/ssd.model'

interface PcCreationAttrs {
  name: string
  description: string
  img: string
  price: number
}

@Table({tableName: 'pc'})
export class Pc extends Model<Pc, PcCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Уничтожитель евреев', description: 'название пк'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'Холокост', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 390000, description: 'Цена'})
  @Column({type: DataType.NUMBER})
  price: number

  @ForeignKey(() => Gpu)
  gpu: Gpu

  @ForeignKey(() => Case)
  case: Case

  @ForeignKey(() => Cpu)
  cpu: Cpu

  @ForeignKey(() => Motherboard)
  motherboard: Motherboard

  @ForeignKey(() => Cooller)
  coller: Cooller

  @ForeignKey(() => Ram)
  ram: Ram

  @ForeignKey(() => Ssd)
  ssd: Ssd

  @ForeignKey(() => Psu)
  psu: Psu
}