import { HttpService, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  getData(): { message: string } {
    return { message: 'Welcome to server!' }
  }

  async getKakaoUser(accessToken: string) {
    const url = `${process.env.KAPI_URL}/v2/user/me`
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }
    return this.http.get(url, { headers }).toPromise()
  }
}
