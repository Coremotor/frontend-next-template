import styled from 'styled-components'
import { FC } from 'react'
import { I_Post } from 'interfaices'
import { Card } from 'app/components/card'

type TProps = {
  posts: I_Post[]
}

export const Posts: FC<TProps> = ({ posts }) => {
  return (
    <Container>
      {posts && posts.map((post) => <Card key={post.id} post={post} />)}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: center;
  grid-gap: 20px;
  padding: 20px 0;
`
