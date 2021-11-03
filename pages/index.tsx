import Banner from 'components/Banner'
import Nav from 'components/Nav'
import Row from 'components/Row'
import Head from 'next/head'

export const getStaticProps = async () => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const API_KEY = process.env.API_KEY

  const netflixOriginalsResponse = await fetch(
    `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`
  )
  const { results: netflixOriginals } = await netflixOriginalsResponse.json()

  const trendingResponse = await fetch(
    `${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`
  )
  const { results: trendingMovies } = await trendingResponse.json()

  return {
    props: { netflixOriginals, trendingMovies },
  }
}

const Home = ({ netflixOriginals, trendingMovies }) => {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name='description' content='Netflix Clone' />
      </Head>

      <main>
        <Nav />
        <Banner movies={netflixOriginals} />
        <Row name='Netflix Originals' movies={netflixOriginals} />
        <Row name='Trending' movies={trendingMovies} />
      </main>
    </>
  )
}

export default Home
