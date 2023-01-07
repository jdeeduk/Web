import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/style.css'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <title>Echo Photos</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="apple-itunes-app" content="app-id=1499073049"/>
      <meta name="description" content="Supreme Photo sharing"/>
    </Head>
    <Component {...pageProps} />
  </Layout>
}
