import Row from 'components/Row'
import Head from 'next/head'

const Home = ({ API_KEY }) => {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name='description' content='Netflix Clone' />
      </Head>

      <main>
        <h1>Netflix Clone</h1>
        <Row
          title='Netflix Originals'
          fetchUrl={`/discover/tv?api_key=${API_KEY}&with_networks=213`}
        />
        <Row
          title='Trending'
          fetchUrl={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
        />
      </main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: { API_KEY: process.env.API_KEY },
  }
}
