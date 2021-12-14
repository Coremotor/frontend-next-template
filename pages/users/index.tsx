import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { serverRequest } from 'api'
import { I_User } from 'interfaices'
import { Layout } from 'app/components/layout'
import { Users } from 'app/_pages/users'

const UsersPage: NextPage = ({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Layout>
        <Users users={users} />
      </Layout>
    </>
  )
}

export default UsersPage

export const getStaticProps: GetStaticProps = async () => {
  const response = await serverRequest.get('/users')
  const users: I_User[] = response.data
  return {
    props: {
      users,
    },
    revalidate: 10,
  }
}
