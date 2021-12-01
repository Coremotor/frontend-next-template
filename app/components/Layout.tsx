import { FC } from 'react'
import { Header } from 'app/components/Header'
import { Footer } from 'app/components/Footer'
import styled from 'styled-components'

export const Layout: FC = ({ children }): JSX.Element => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`
