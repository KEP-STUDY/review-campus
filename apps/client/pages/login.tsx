import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function login() {
  return (
    <>
      <Head>
        <title>Welcome to Login</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href={`${process.env.AUTHORIZATION_SERVER}/oauth/authorize?response_type=code&client_id=${process.env.APP_KEY}&redirect_uri=${process.env.REDIRECT_URI}`}
        >
          <Image src="/kakao_login_large_narrow.png" alt="LoginButton" width={366} height={90} />
        </a>
      </div>
    </>
  )
}

export default login
