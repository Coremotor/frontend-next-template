import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { Routes } from 'routes'
import styled from 'styled-components'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Content>
          <Link href={Routes.posts}>
            <StyledLink>Go to posts page</StyledLink>
          </Link>
          <Link href={Routes.users}>
            <StyledLink>Go to users page</StyledLink>
          </Link>
        </Content>
      </Layout>
      <ToastContainer />
    </>
  )
}

export default HomePage

const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

const StyledLink = styled.a`
  cursor: pointer;
  margin-bottom: 10px;
`
