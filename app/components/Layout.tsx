import { FC } from 'react'
import { Header } from 'app/components/Header'
import { Footer } from 'app/components/Footer'

export const Layout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
