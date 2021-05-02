import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from 'components'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>리뷰 캠퍼스</title>
      </Head>
      <div className="app">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default CustomApp
