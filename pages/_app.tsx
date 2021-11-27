import Head from 'next/head'
import Nav from 'components/Nav'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
