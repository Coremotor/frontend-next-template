import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/Layout'

const PostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <Layout>
        <div>Post</div>
      </Layout>
    </>
  )
}

export default PostPage
