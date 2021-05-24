import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Table } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  user: string

  @Column()
  profile: string

  @Column()
  isReviewer: number

  @Column()
  skills: string

  @Column()
  detail: string
}
