import { NextPage } from 'next'
import { SignIn } from 'app/components/signInPage'
import Head from 'next/head'

const SignInPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <SignIn />
    </>
  )
}

export default SignInPage
