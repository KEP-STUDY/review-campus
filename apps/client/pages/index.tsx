import React, { useEffect, useState } from 'react'
import { Header } from 'components'
import { getProfile } from 'api/auth'
import { AxiosError, AxiosResponse } from 'axios'
import { KakaoProfile, User } from 'interfaces'

function Index() {
  const [user, setUser] = useState<User>(null)

  const handleProfile = (res: AxiosResponse<KakaoProfile>) => {
    const { data } = res
    setUser({ nickname: data.nickname, profileImage: data.profile_image })
  }

  const handleProfileError = (err: AxiosError) => {
    const { data } = err.response
    console.log(data.error_description)
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
