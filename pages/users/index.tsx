import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/Layout'
import { request } from 'api'
import { I_User } from 'interfaices'
import { Users } from 'app/users'

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
  const response = await request.get('/users')
  const users: I_User[] = response.data
  return {
    props: {
      users,
    },
    revalidate: 10,
  }
}
