import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript'

@Table({
  modelName: 'post',
  tableName: 'posts',
})
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  readonly id!: number

  @Column(DataType.STRING)
  message!: string

  @Column(DataType.STRING)
  created_at!: string

  @Column(DataType.STRING)
  updated_at!: string
}
