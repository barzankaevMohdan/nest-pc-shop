import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface CoollerCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  tdp: number
  color: string
}

@Table({tableName: 'cooller'})
export class Cooller extends Model<Cooller, CoollerCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Система охлаждения LIAN LI Galahad AIO 360', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: '120 мм - три секции, 3 pin, радиатор - алюминий, TDP 300 Вт', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'Asus', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 200, description: 'рассеиваемая мощность'})
  @Column({type: DataType.NUMBER})
  tdp: number

  @ApiProperty({example: 'black', description: 'Основной цвет'})
  @Column({type: DataType.STRING})
  color: string
}