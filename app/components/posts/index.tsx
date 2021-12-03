import styled from 'styled-components'
import { FC } from 'react'
import { I_Post } from 'interfaices'
import { Item } from 'app/components/item'

type TProps = {
  posts: I_Post[]
}

export const Posts: FC<TProps> = ({ posts }) => {
  console.log(posts)
  return (
    <Container>
      {posts && posts.map((p) => <Item key={p.id} post={p} />)}
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
