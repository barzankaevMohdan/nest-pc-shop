import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface PsuCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  vt: number
  certificate: string
  detachable_cables: boolean
}

@Table({tableName: 'psu'})
export class Psu extends Model<Psu, PsuCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Блок питания be quiet! STRAIGHT POWER 11 PLATINUM 1200W [BN310]', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: '1200 Вт, 80+ Platinum, EPS12V, APFC, 20 + 4 pin, 4+4 pin, 8 pin CPU, 11 SATA, 6+2 pin x6 PCI-E', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'be quiet', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 1000, description: 'Мощность вват'})
  @Column({type: DataType.NUMBER})
  vt: number

  @ApiProperty({example: 'Titanium', description: 'Сертификат'})
  @Column({type: DataType.NUMBER})
  certificate: string

  @ApiProperty({example: true, description: 'Отстегиваются кабели'})
  @Column({type: DataType.BOOLEAN})
  detachable_cables: boolean
}