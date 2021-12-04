import { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'app/components/Layout'
import { GetServerSideProps } from 'next'
import { request } from 'api'
import { I_Post } from 'interfaices'
import { Post } from 'app/components/post'

const PostPage: NextPage = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <Post post={post}>Post</Post>
      </Layout>
    </>
  )
}

export default PostPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.query
  const response = await request.get(`/posts/${postId}`)
  const post: I_Post = response.data

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
