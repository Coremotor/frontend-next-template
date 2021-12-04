import styled from 'styled-components'
import { I_Post } from 'interfaices'
import { FC } from 'react'

type TProps = {
  post: I_Post
}

export const Post: FC<TProps> = ({ post }) => {
  return (
    <Article>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Article>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2``
const Body = styled.p``
