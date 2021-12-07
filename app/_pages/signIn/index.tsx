import Link from 'next/link'
import { Routes } from 'routes'
import { Main } from 'app/components/ui/containers'
import { Form, FormWrapper } from 'app/components/ui/form'
import { Input, InputWrapper, Label } from 'app/components/ui/input'
import { Button } from 'app/components/ui/button'
import { A } from 'app/components/ui/link'
import { GoBack } from 'app/components/goBack'
import { FormEvent } from 'react'

export const SignIn = () => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sign in')
  }
  return (
    <Main>
      <GoBack text="Home page" redirectTo={Routes.home} />
      <FormWrapper>
        <Form onSubmit={submit}>
          <InputWrapper>
            <Label htmlFor="login">Login</Label>
            <Input id="login" name="login" type="text" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
          </InputWrapper>

          <Button>Sign in</Button>

          <Link href={Routes.sign_up}>
            <A>Sing up</A>
          </Link>
        </Form>
      </FormWrapper>
    </Main>
  )
}
