import styled from 'styled-components'
import Link from 'next/link'
import { Routes } from 'routes'

export const Navigation = () => {
  return (
    <Content>
      <Link href={Routes.posts}>
        <StyledLink>Go to posts page</StyledLink>
      </Link>
      <Link href={Routes.users}>
        <StyledLink>Go to users page</StyledLink>
      </Link>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const StyledLink = styled.a`
  cursor: pointer;
  margin-bottom: 10px;
`
