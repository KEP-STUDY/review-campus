import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    min-width: 1024px;
    background-color: #fff;
    -webkit-text-size-adjust: none;
    word-break: break-all;
  }
  #__next {
    height:100%;
  }
`
