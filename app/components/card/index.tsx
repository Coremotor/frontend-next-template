import { DefaultThemeProps } from 'app/styles/types'
import styled from 'styled-components'
import { I_Post, I_User } from 'interfaices'
import { FC } from 'react'
import Link from 'next/link'
import { Routes } from 'routes'

type TProps = {
  post?: I_Post
  user?: I_User
}

export const Card: FC<TProps> = ({ post, user }) => {
  return (
    <>
      {post && (
        <Link href={Routes.posts + '/' + post.id} passHref>
          <A>
            <span>{post.title}</span>
          </A>
        </Link>
      )}
      {user && (
        <Link href={Routes.users + '/' + user.id} passHref>
          <A>
            <span>{user.name}</span>
          </A>
        </Link>
      )}
    </>
  )
}

const A = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  padding: 10px;
  &:hover {
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`
