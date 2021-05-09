import { HttpService, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' }
  }

  async getToken(code: string) {
    const url = `${process.env.KAUTH_URL}/oauth/token`
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('client_id', process.env.APP_KEY || '')
    params.append('redirect_uri', process.env.KAUTH_REDIRECT_URI || '')
    params.append('code', code)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }

    return this.http.post(url, params, config).toPromise()
  }

  async getResource(accessToken: string) {
    const url = `${process.env.KAPI_URL}/v2/user/me`

    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    }

    return this.http.get(url, config).toPromise()
  }
}
