import { ResponseSuccessHandler, ResponseErrorHandler, Token } from 'interfaces'
import qs from 'querystring'
import request from '.'

export const KAKAO_OAUTH2_URL = `${process.env.NEXT_PUBLIC_KAUTH_URL}/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAUTH_REDIRECT_URI}`

export const getToken = async (
  code: string,
  onSuccess: ResponseSuccessHandler<Token>,
  onError: ResponseErrorHandler<Token>
) => {
  const data = qs.stringify({
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_APP_KEY,
    redirect_uri: process.env.NEXT_PUBLIC_KAUTH_REDIRECT_URI,
    code,
  })
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  }
  await request<Token>({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_KAUTH_URL}/oauth/token`,
    data,
    config,
    onSuccess,
    onError,
  })
}

export const getProfile = async (
  accessToken: string,
  onSuccess: ResponseSuccessHandler,
  onError: ResponseErrorHandler
) => {
  await request({
    url: `/profile?token=${accessToken}`,
    onSuccess,
    onError,
  })
}
