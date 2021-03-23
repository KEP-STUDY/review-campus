import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

function me() {
  const router = useRouter()
  const nickname = router.query.nickname
  const profileImage = router.query.profile_image
  return (
    <>
      <Head>
        <title>Me</title>
      </Head>
      <div> {nickname}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={profileImage} alt="hello" width={366} height={90} />
      </div>
    </>
  )
}

export default me
