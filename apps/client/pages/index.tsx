import React, { useEffect, useState } from 'react'
import { Header } from 'components'
import { getProfile } from 'api/auth'
import { AxiosError, AxiosResponse } from 'axios'
import { KakaoProfile, User } from 'interfaces'

function Index() {
  const [user, setUser] = useState<User>(null)

  const handleProfile = (res: AxiosResponse<KakaoProfile>) => {
    const { nickname, profile_image } = res.data
    setUser({ nickname, profileImage: profile_image })
  }

  const handleProfileError = (err: AxiosError) => {
    console.log(err.message)
    alert('프로필 로드 실패')
  }

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken')
    if (accessToken) getProfile(accessToken, handleProfile, handleProfileError)
  }, [])

  return (
    <>
      <Header user={user} />
      <div>Index Page</div>
    </>
  )
}

export default Index
