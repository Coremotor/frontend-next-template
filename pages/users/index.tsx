import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/Layout'

const UsersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Layout>
        <div>Users</div>
      </Layout>
    </>
  )
}

export default UsersPage
