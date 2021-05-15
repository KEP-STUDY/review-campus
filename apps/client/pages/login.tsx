import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { getToken } from 'api/auth'
import type { AxiosError, AxiosResponse } from 'axios'
import { Token } from 'interfaces'

function Login() {
  const { query } = useRouter()

  const handleToken = (res: AxiosResponse<Token>) => {
    const { data } = res
    sessionStorage.setItem('accessToken', data.access_token)
    sessionStorage.setItem('refreshToken', data.refresh_token)
  }

  const handleTokenError = (err: AxiosError) => {
    const { data } = err.response
    console.log(data.error_description)
    alert('로그인 실패')
  }

  useEffect(() => {
    const { code } = query
    if (code) getToken(code as string, handleToken, handleTokenError)
    Router.push('/')
  }, [query])

  return <div>Logging in...</div>
}

export default Login
