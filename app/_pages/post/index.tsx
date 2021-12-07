import styled from 'styled-components'
import { I_Post } from 'interfaices'
import { FC } from 'react'
import { GoBack } from 'app/components/goBack'
import { Routes } from 'routes'
import { useRouter } from 'next/router'

type TProps = {
  post: I_Post
}

export const Post: FC<TProps> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Article>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
      </Article>
      <GoBack text="To Posts" redirectTo={Routes.posts} />
    </>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const Title = styled.h2``
const Body = styled.p``
