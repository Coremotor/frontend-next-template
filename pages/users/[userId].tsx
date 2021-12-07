import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/layout'
import { requestOnServer } from 'api'
import { I_User } from 'interfaices'
import { User } from 'app/_pages/user'

const UserPage: NextPage = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Layout>
        <User user={user} />
      </Layout>
    </>
  )
}

export default UserPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query
  const response = await requestOnServer.get(`/users/${userId}`)
  const user: I_User = response.data

  if (!user) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      user,
    },
  }
}
