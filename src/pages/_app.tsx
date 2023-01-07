import type { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.png'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} width={200} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
