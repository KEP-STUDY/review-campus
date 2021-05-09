import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'

export const LoginLink = styled(Link)`
  text-decoration: none;
`

export const Container = styled.div`
  flex-grow: 1;
`

export const Title = styled(Typography)`
  flex-grow: 1;
  padding-left: 16px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Nickname = styled.span`
  margin-right: 16px;
`

export const ProfileIamge = styled.img`
  width: 45px;
  height: 45px;
`
