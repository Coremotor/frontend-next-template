import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Layout } from 'app/components/Layout'
import Head from 'next/head'
import { request } from 'api'
import { I_Post } from 'interfaices'
import { Posts } from 'app/components/posts'

const PostsPage: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Layout>
        <Posts posts={posts} />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const response = await request.get('/posts')
  const posts: I_Post[] = response.data
  return {
    props: {
      posts, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
