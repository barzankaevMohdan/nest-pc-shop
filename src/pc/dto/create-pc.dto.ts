import { ApiProperty } from "@nestjs/swagger"
import { IsString, Length, IsEmail } from "class-validator"

export class CreatePcDto {
  @ApiProperty({example: 'name', description: 'название'})
  @IsString({message: 'should be a string'})
  readonly name: string

  @ApiProperty({example: 'description', description: 'описание'})
  @IsString({message: 'should be a string'})
  readonly description: string

  @ApiProperty({example: 'http://interesting-information.ru', description: 'ссылка на картинку'})
  @IsString({message: 'should be a string'})
  readonly img: string

  @ApiProperty({example: 'price', description: 'цена'})
  @IsString({message: 'should be a number'})
  readonly price: number

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'gpu id'})
  @IsString({message: 'should be a string'})
  readonly gpu: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'case id'})
  @IsString({message: 'should be a string'})
  readonly case: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'cpu id'})
  @IsString({message: 'should be a string'})
  readonly cpu: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'motherboard id'})
  @IsString({message: 'should be a string'})
  readonly motherboard: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'coller id'})
  @IsString({message: 'should be a string'})
  readonly coller: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'ram id'})
  @IsString({message: 'should be a string'})
  readonly ram: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'ssd id'})
  @IsString({message: 'should be a string'})
  readonly ssd: string

  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'psu id'})
  @IsString({message: 'should be a string'})
  readonly psu: string
}