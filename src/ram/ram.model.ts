import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface RamCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  memory_type: string
  memory_size: number
  clock_frequency: number
}

@Table({tableName: 'ram'})
export class Ram extends Model<Ram, RamCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Оперативная память Kingston FURY Beast Black', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'DDR4, 16 ГБx1 шт, 3733 МГц, 19-23-23', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'Kingston FURY', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 'DDR4', description: 'тип памяти'})
  @Column({type: DataType.STRING})
  memory_type: string

  @ApiProperty({example: 16, description: 'Объем памяти'})
  @Column({type: DataType.NUMBER})
  memory_size: number

  @ApiProperty({example: 3600, description: 'Тактовая частота'})
  @Column({type: DataType.NUMBER})
  clock_frequency: number
}