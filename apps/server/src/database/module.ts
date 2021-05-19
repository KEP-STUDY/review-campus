import { Module } from '@nestjs/common'
import { AppController } from '../app/app.controller'
import { databaseProviders } from './providers'

@Module({
  providers: [...databaseProviders, AppController],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
