import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'text',
    name: 'NAME',
  })
  name: string

  @Column({
    type: 'text',
    name: 'GITHUB_URL',
  })
  github_url: string

  @Column({
    type: 'text',
    name: 'PROFILE_IMAGE',
  })
  profile_image: string

  @Column({
    type: 'text',
    name: 'IS_REVIEWER',
  })
  isReviewer: string

  @Column({
    type: 'text',
    name: 'SKILLS',
  })
  skills: string

  @Column({
    type: 'text',
    name: 'DETAIL',
  })
  detail: string

  @Column({
    type: 'text',
    name: 'KAKAO_ID',
  })
  kakaoId: string
}
