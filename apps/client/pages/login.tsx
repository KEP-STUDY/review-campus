import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'

function Login() {
  const { query } = useRouter()

  useEffect(() => {
    const { nickname, profile_image } = query
    if (nickname && profile_image) {
      sessionStorage.setItem('nickname', nickname as string)
      sessionStorage.setItem('profileImage', profile_image as string)
      Router.push('/')
    }
  }, [query])

  return <div>Logging in...</div>
}

export default Login
