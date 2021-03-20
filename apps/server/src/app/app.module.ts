import { Module } from '@nestjs/common'
import { GlobalIdScalar } from 'nestjs-relay'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GlobalIdScalar],
})
export class AppModule {}
