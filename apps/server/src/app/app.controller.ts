import { Controller, Get } from '@nestjs/common'
import { ResolvedGlobalId } from 'nestjs-relay'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    const resolvedGlobalId = new ResolvedGlobalId({ type: 'User', id: '1' })

    console.log(resolvedGlobalId.toString()) // '1'
    console.log(resolvedGlobalId.toNumber()) // 1
    return this.appService.getData()
  }
}
