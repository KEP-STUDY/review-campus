import { Controller, Get, Query, Redirect } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('/oauth')
  @Redirect(process.env.CLIENT_URL)
  async getOauth(@Query('code') code: string) {
    try {
      const tokenResponse = await this.appService.getToken(code)
      const accessToken = tokenResponse.data.access_token
      const resourceResponse = await this.appService.getResource(accessToken)
      const profile = resourceResponse.data.properties
      return {
        url: `${process.env.CLIENT_URL}/login?nickname=${profile.nickname}&profile_image=${profile.profile_image}`,
      }
    } catch (err) {
      console.log(err)
    }
  }
}
