import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/Layout'

const UserPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Layout>
        <div>User</div>
      </Layout>
    </>
  )
}

export default UserPage
