import React from 'react'
import * as S from './header.styled'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { KAKAO_OAUTH2_URL } from 'api/auth'
import { User } from 'interfaces'

interface Props {
  user?: User
}

function Header({ user }: Props) {
  return (
    <S.Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <S.Title variant="h6">리뷰캠퍼스</S.Title>
          {user ? (
            <S.ProfileWrapper>
              <S.Nickname> {user.nickname}</S.Nickname>
              <S.ProfileIamge src={user.profileImage} alt="profile-iamge" />
            </S.ProfileWrapper>
          ) : (
            <S.LoginLink color="inherit" href={KAKAO_OAUTH2_URL}>
              <Button color="inherit">로그인</Button>
            </S.LoginLink>
          )}
        </Toolbar>
      </AppBar>
    </S.Container>
  )
}

export default Header
