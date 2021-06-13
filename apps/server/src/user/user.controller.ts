import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './user.entity'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService
  }

  @Get('list')
  async findAll(): Promise<User[]> {
    const userList = await this.userService.findAll()
    return Object.assign({
      data: userList,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    })
  }
}
