import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber } from "class-validator"

export class CreateCaseDto {
  @ApiProperty({example: 'name', description: 'название'})
  @IsString({message: 'should be a string'})
  readonly name: string

  @ApiProperty({example: 'description', description: 'описание'})
  @IsString({message: 'should be a string'})
  readonly description: string

  @ApiProperty({example: 'http://interesting-information.ru', description: 'ссылка на картинку'})
  @IsString({message: 'should be a string'})
  readonly img: string

  @ApiProperty({example: 'LIAN LI', description: 'Производитель'})
  @IsString({message: 'should be a string'})
  readonly manufacturer: string

  @ApiProperty({example: ['E-ATX', 'Micro-ATX', 'Mini-ITX', 'Standard-ATX'], description: 'Форм-фактор совместимых плат'})
  @IsString({message: 'should be a array'})
  readonly board_form_factor: []

  @ApiProperty({example: 'Full-Tower', description: 'Типоразмер корпуса'})
  @IsString({message: 'should be a string'})
  readonly dimension_type: string

  @ApiProperty({example: 'bottom', description: 'размещение блока питания'})
  @IsString({message: 'should be a string'})
  readonly power_placement: string

  @ApiProperty({example: 'black', description: 'цвет корпуса'})
  @IsString({message: 'should be a string'})
  readonly color: string

  @ApiProperty({example: 167, description: 'максимальная высота процессорного куллера'})
  @IsNumber()
  readonly cpu_cooller_height: number

  @ApiProperty({example: 490, description: 'высота корпуса'})
  @IsNumber()
  readonly height: number
}