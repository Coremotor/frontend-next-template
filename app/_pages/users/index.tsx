import styled from 'styled-components'
import { FC } from 'react'
import { I_User } from 'interfaices'
import { Card } from 'app/components/card'
import { GoBack } from 'app/components/goBack'
import { Routes } from 'routes'

type TProps = {
  users: I_User[]
}

export const Users: FC<TProps> = ({ users }) => {
  return (
    <>
      <Container>
        {users && users.map((user) => <Card key={user.id} user={user} />)}
      </Container>
      <GoBack text="To Home" redirectTo={Routes.home} />
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  justify-content: center;
  grid-gap: 20px;
  padding: 20px 0;
  margin-bottom: 40px;
`
