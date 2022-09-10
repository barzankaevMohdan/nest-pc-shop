import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

interface CaseCreationAttrs {
  name: string
  description: string
  img: string
  manufacturer: string
  board_form_factor: string[]
  dimension_type: string
  power_placement: string
  color: string
  cpu_cooller_height: number
  height: number
}

@Table({tableName: 'case'})
export class Case extends Model<Case, CaseCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: string

  @ApiProperty({example: 'LIAN LI PC-O11 Dynamic XL ROG Certify [G99.O11DXL-X.00] черный', description: 'название'})
  @Column({type: DataType.STRING})
  name: string

  @ApiProperty({example: 'корпус мощный', description: 'Описание'})
  @Column({type: DataType.STRING})
  description: string

  @ApiProperty({example: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d8ed1a09b718ef08963c66d8207522bb/950c0411e172bcc5d526080f80a3bf68011980af1fc1bec299931ff02a19869b.png.webp', description: 'ссылка на картинку'})
  @Column({type: DataType.STRING})
  img: string

  @ApiProperty({example: 'LIAN LI', description: 'Производитель'})
  @Column({type: DataType.STRING})
  manufacturer: string

  @ApiProperty({example: ['E-ATX', 'Micro-ATX', 'Mini-ITX', 'Standard-ATX'], description: 'Форм-фактор совместимых плат'})
  @Column({type: DataType.ARRAY(DataType.STRING)})
  board_form_factor: []

  @ApiProperty({example: 'Full-Tower', description: 'Типоразмер корпуса'})
  @Column({type: DataType.STRING})
  dimension_type: string

  @ApiProperty({example: 'bottom', description: 'размещение блока питания'})
  @Column({type: DataType.STRING})
  power_placement: string

  @ApiProperty({example: 'black', description: 'цвет корпуса'})
  @Column({type: DataType.STRING})
  color: string

  @ApiProperty({example: 167, description: 'максимальная высота процессорного куллера'})
  @Column({type: DataType.NUMBER})
  cpu_cooller_height: number

  @ApiProperty({example: 490, description: 'высота корпуса'})
  @Column({type: DataType.NUMBER})
  height: number
}