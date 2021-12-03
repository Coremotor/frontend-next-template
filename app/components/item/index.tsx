import { DefaultThemeProps } from 'app/styles/types'
import styled from 'styled-components'
import { I_Post } from 'interfaices'
import { FC } from 'react'

type TProps = {
  post: I_Post
}

export const Item: FC<TProps> = ({ post }) => {
  return (
    <Container>
      <span>{post.title}</span>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 10px;
`
