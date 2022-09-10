import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface CpuCreationAttrs {
  name: string
  description: string
  img: string
  socket: string
  processor_family: string
  number_cores: number
  heat_dissipation: number
}

@Table({tableName: 'cpu'})
export class Cpu extends Model<Cpu, CpuCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'AMD Ryzen 9 5950X OEM', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'прцоессор мощный', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'AM4', description: 'Сокет'})
  @Column({type: DataType.STRING})
  socket: string

  @ApiProperty({example: 'Intel Core i9', description: 'семейство процессоров'})
  @Column({type: DataType.STRING})
  processor_family: string

  @ApiProperty({example: 16, description: 'Количество ядер'})
  @Column({type: DataType.NUMBER})
  number_cores: number

  @ApiProperty({example: 200, description: 'Тепловыделение'})
  @Column({type: DataType.NUMBER})
  heat_dissipation: number
}