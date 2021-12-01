import type { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import { config } from 'api/config'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div>{config.baseUrl}</div>
      </Layout>
      <ToastContainer />
    </>
  )
}

export default Home
