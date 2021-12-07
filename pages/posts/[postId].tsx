import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import Head from 'next/head'
import { requestOnServer } from 'api'
import { I_Post } from 'interfaices'
import { Layout } from 'app/components/layout'
import { Post } from 'app/_pages/post'

const PostPage: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await requestOnServer.get('/posts')
  const posts: I_Post[] = response.data

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params as { postId: string }
  const response = await requestOnServer.get(`/posts/${postId}`)
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
    revalidate: 10,
  }
}
