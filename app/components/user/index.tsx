import styled from 'styled-components'
import { I_User } from 'interfaices'
import { FC } from 'react'
import { GoBack } from 'app/components/goBack'
import { Routes } from 'routes'

type TProps = {
  user: I_User
}

export const User: FC<TProps> = ({ user }) => {
  return (
    <>
      <Article>
        <Title>{user.username}</Title>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.website}</Text>
        <SubTitle>Address</SubTitle>
        <Text>{user.address.street}</Text>
        <Text>{user.address.suite}</Text>
        <Text>{user.address.city}</Text>
        <Text>{user.address.zipcode}</Text>
        <SubTitle>Company</SubTitle>
        <Text>{user.company.name}</Text>
        <Text>{user.company.catchPhrase}</Text>
      </Article>
      <GoBack text="To Users" redirectTo={Routes.users} />
    </>
  )
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const Title = styled.h2``
const Text = styled.span``
const SubTitle = styled.h3``
