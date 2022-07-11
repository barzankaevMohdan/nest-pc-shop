import { ApiProperty } from "@nestjs/swagger"
import { IsString, Length, IsEmail } from "class-validator"

export class CreateUserDto {
  @ApiProperty({example: 'test@gmail.com', description: 'почта'})
  @IsString({message: 'should be a string'})
  @IsEmail({}, {message: 'incorrect email'})
  readonly email: string
  @ApiProperty({example: 'asdasd123123', description: 'пароль'})
  @IsString({message: 'should be a string'})
  @Length(4, 16, {message: 'not less than 4 and not more than 16'})
  readonly password: string
}