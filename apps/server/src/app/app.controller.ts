import { Controller, Get, Query, Req, Res } from '@nestjs/common'
import { Response } from 'express'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('/oauth')
  async getOauth(@Query('code') code: string, @Res() res: Response) {
    const tokenResponse = await this.appService.getToken(code)
    const accessToken = tokenResponse.data.access_token
    const resourceResponse = await this.appService.getResource(accessToken)
    console.log(resourceResponse.data)
    const profile = resourceResponse.data.properties
    res.redirect(
      `${process.env.CLIENT_URI}/me?nickname=${profile.nickname}&profile_image=${profile.profile_image}`
    )
  }
}
