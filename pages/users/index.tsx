import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { requestOnServer } from 'api'
import { I_User } from 'interfaices'
import { Layout } from 'app/components/layout'
import { Users } from 'app/components/users'

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
  const response = await requestOnServer.get('/users')
  const users: I_User[] = response.data
  return {
    props: {
      users,
    },
    revalidate: 10,
  }
}
