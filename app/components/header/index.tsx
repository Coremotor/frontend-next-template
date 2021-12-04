import styled from 'styled-components'
import { DefaultThemeProps } from 'app/styles/types'
import Image from 'next/image'
import logo from 'app/assets/sample-logo.png'
import { AiOutlineLogin } from '@react-icons/all-files/ai/AiOutlineLogin'
import Link from 'next/link'
import { Routes } from 'routes'

export const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="logo" height={64} width={128} />
      <Link href={Routes.sign_in} passHref>
        <A>
          <Text>Sing in</Text>
          <StyledAiOutlineLogin />
        </A>
      </Link>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${(props: DefaultThemeProps) => props.theme.text.primary};
`

const StyledAiOutlineLogin = styled(AiOutlineLogin)`
  height: 32px;
  width: 32px;
`

const A = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Text = styled.span`
  margin-right: 20px;
`
