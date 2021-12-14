import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { serverRequest } from 'api'
import { I_Post } from 'interfaices'
import { Layout } from 'app/components/layout'
import { Posts } from 'app/_pages/posts'

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
    </>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const response = await serverRequest.get('/posts')
  const posts: I_Post[] = response.data
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
