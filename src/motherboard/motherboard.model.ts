import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface MotherboardCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  socket: string
  chipset: string
  memory_slots: number
  cpu: string
  memory_type: string
  pci_express: string
  form_factor: string
}

@Table({tableName: 'motherboard'})
export class Motherboard extends Model<Motherboard, MotherboardCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'Материнская плата ASUS ROG CROSSHAIR VIII EXTREME', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'AM4, AMD X570, 4xDDR4-3200 МГц, 2xPCI-Ex16, 3xM.2, E-ATX', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'Asus', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: 'AM4', description: 'сокет'})
  @Column({type: DataType.STRING})
  socket: string

  @ApiProperty({example: 'AMD B550', description: 'Чипсет'})
  @Column({type: DataType.STRING})
  chipset: string

  @ApiProperty({example: 4, description: 'Количество слотов памяти'})
  @Column({type: DataType.NUMBER})
  memory_slots: number

  @ApiProperty({example: 'AMD', description: 'Для процессоров'})
  @Column({type: DataType.STRING})
  cpu: string

  @ApiProperty({example: 'DDR4', description: 'Тип поддерживаемой памяти'})
  @Column({type: DataType.STRING})
  memory_type: string

  @ApiProperty({example: '4.0', description: 'Версия pci express'})
  @Column({type: DataType.STRING})
  pci_express: string

  @ApiProperty({example: 2, description: 'Количество разьемов для m2'})
  @Column({type: DataType.NUMBER})
  connectors_m2: number

  @ApiProperty({example: 'E-ATX', description: 'форм фактор'})
  @Column({type: DataType.STRING})
  form_factor: string
}