import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('/profile')
  async getProfile(@Query('token') token: string) {
    try {
      const res = await this.appService.getKakaoUser(token)
      return res.data.properties
    } catch (err) {
      console.log(err)
    }
  }
}
