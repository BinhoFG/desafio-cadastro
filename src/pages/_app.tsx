import type { AppProps } from 'next/app'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/logo.png'
import { CustomerContextProvider } from '../contexts/CustomerContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomerContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} width={200} alt="" />
        </Header>
        <ToastContainer />
        <Component {...pageProps} />
      </Container>
    </CustomerContextProvider>
  )
}
