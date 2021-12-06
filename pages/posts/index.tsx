import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { requestOnServer } from 'api'
import { I_Post } from 'interfaices'
import { Posts } from 'app/components/posts'
import { Layout } from 'app/components/layout'

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
  const response = await requestOnServer.get('/posts')
  const posts: I_Post[] = response.data
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
