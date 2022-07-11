import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class AddRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'роль'})
  @IsString({message: 'should be a string'})
  readonly value: string
  @ApiProperty({example: 'ef7b0373-cb9e-4aeb-acde-6fb230c6e602', description: 'id пользователя'})
  @IsString({message: 'should be a string'})
  readonly userId: number
}