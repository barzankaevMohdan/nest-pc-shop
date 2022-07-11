import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'значение роли'})
  @IsString({message: 'should be a string'})
  readonly value: string
  @ApiProperty({example: 'Администратор', description: 'описание роли'})
  @IsString({message: 'should be a string'})
  readonly description: string
}