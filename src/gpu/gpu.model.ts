import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface GpuCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  memory: number
  gpu_manufacturer: string
  memory_type: string
  pci_express: string
}

@Table({tableName: 'gpu'})
export class Gpu extends Model<Gpu, GpuCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Palit GeForce RTX 3090 TI GameRock OC [NED309TS19SB-1022G]', description: 'название карты'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'карта мощный', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'Palit', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 24, description: 'объем памяти'})
  @Column({type: DataType.NUMBER})
  memory: number

  @ApiProperty({example: 'NVIDIA', description: 'Производитель графического процессора'})
  @Column({type: DataType.STRING})
  gpu_manufacturer: string

  @ApiProperty({example: 'GDDR6X', description: 'Тип памяти'})
  @Column({type: DataType.STRING})
  memory_type: string

  @ApiProperty({example: '4.0', description: 'Версия pci express'})
  @Column({type: DataType.STRING})
  pci_express: string
}