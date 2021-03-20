import { Resolver } from '@nestjs/graphql'
import { GlobalIdFieldResolver } from 'nestjs-relay'
import { User } from './interface'

@Resolver()
export class UserResolver extends GlobalIdFieldResolver(User) {}
