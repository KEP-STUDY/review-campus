import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>리뷰 캠퍼스</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default CustomApp
