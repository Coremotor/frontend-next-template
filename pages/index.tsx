import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import { Content } from 'app/components/homePage/content'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Content />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default Home
