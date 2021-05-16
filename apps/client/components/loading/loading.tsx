import React from 'react'
import * as S from './loading.styled'

import CircularProgress from '@material-ui/core/CircularProgress'

function Loading() {
  return (
    <S.Container>
      <CircularProgress />
    </S.Container>
  )
}

export default Loading
