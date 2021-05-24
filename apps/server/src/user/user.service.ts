import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm/index'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    this.userRepository = userRepository
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }
}
