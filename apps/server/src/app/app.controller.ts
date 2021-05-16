import { Controller, Get, Headers } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('/profile')
  async getProfile(@Headers('Authorization') authorization: string) {
    try {
      const res = await this.appService.getKakaoUser(authorization)
      return res.data.properties
    } catch (err) {
      console.log(err)
    }
  }
}
