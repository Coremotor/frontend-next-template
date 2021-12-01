import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import { Content } from 'app/components/homePage/content'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Content />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default Home
