import { NextPage } from 'next'
import { SignUp } from 'app/components/signUpPage'
import Head from 'next/head'

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
    </>
  )
}

export default SignUpPage
