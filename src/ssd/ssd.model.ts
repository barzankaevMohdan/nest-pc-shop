import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface SsdCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  memory_size: number
  reading_speed: number
}

@Table({tableName: 'ssd'})
export class Ssd extends Model<Ssd, SsdCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: '1000 ГБ SSD M.2 накопитель Samsung 980 PRO', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'PCI-E 4.0 x4, чтение - 7000 Мбайт/сек, запись - 5000 Мбайт/сек, 3 бит TLC, NVM Express', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'Samsung', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 1000, description: 'Объем памяти'})
  @Column({type: DataType.NUMBER})
  memory_size: number

  @ApiProperty({example: 2000, description: 'Скорость чтения'})
  @Column({type: DataType.NUMBER})
  reading_speed: number
}