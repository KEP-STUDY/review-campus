import { NodeInterface, NodeType } from 'nestjs-relay'

@NodeType()
export class User extends NodeInterface {
  name: string
}
