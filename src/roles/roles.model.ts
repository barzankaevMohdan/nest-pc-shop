import { ApiProperty } from '@nestjs/swagger'
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/users.model'
import { UserRoles } from './user-roles.model'

interface RoleCreationAttrs {
  value: string
  description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({example: 'e7757460-c3d2-4b8a-bfbf-10d5d704d64c', description: 'id'})
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ApiProperty({example: 'ADMIN', description: 'уникальное значение роли пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string

  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  @Column({type: DataType.STRING, allowNull: true})
  description: string

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}