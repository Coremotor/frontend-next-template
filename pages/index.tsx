import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import Head from 'next/head'
import { Navigation } from 'app/components/navigation'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Navigation />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default HomePage
