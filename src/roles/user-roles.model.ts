import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { User } from 'src/users/users.model'
import { Role } from './roles.model'

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true, allowNull: false})
  id: number

  @ForeignKey(() => Role)
  @Column({type: DataType.UUID})
  roleId: number

  @ForeignKey(() => User)
  @Column({type: DataType.UUID})
  userId: number
}