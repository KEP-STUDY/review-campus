import { Injectable } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' }
  }

  async getToken(code: string): Promise<Response> {
    const url = `${process.env.AUTHORIZATION_SERVER}/oauth/token`

    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('client_id', process.env.APP_KEY || '')
    params.append('redirect_uri', process.env.REDIRECT_URI || '')
    params.append('code', code)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }

    return axios.post(url, params, config)
  }

  async getResource(accessToken: string): Promise<Response> {
    const url = `${process.env.RESOURCE_SERVER}/v2/user/me`

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }

    return axios.get(url, config)
  }
}
