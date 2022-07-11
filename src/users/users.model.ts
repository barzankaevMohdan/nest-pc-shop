import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/user-roles.model'

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'test@gmail.com', description: 'почта'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string

  @ApiProperty({example: 'asdasd123123', description: 'пароль'})
  @Column({type: DataType.STRING, allowNull: true})
  password: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}