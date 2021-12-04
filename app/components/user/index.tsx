import styled from 'styled-components'
import { I_User } from 'interfaices'
import { FC } from 'react'

type TProps = {
  user: I_User
}

export const User: FC<TProps> = ({ user }) => {
  console.log(user)
  return (
    <Article>
      <Title>{user.name}</Title>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2``
