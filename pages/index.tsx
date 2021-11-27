import Banner from 'components/Banner'
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
  const { results: trending } = await trendingResponse.json()

  const topRatedResponse = await fetch(
    `${baseUrl}movie/top_rated?api_key=${API_KEY}&language=en-US`
  )
  const { results: topRated } = await topRatedResponse.json()

  const actionResponse = await fetch(
    `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`
  )
  const { results: action } = await actionResponse.json()

  const comedyResponse = await fetch(
    `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`
  )
  const { results: comedy } = await comedyResponse.json()

  const horrorResponse = await fetch(
    `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`
  )
  const { results: horror } = await horrorResponse.json()

  const romanceResponse = await fetch(
    `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`
  )
  const { results: romance } = await romanceResponse.json()

  const documentariesResponse = await fetch(
    `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`
  )
  const { results: documentaries } = await documentariesResponse.json()

  return {
    props: {
      netflixOriginals,
      trending,
      topRated,
      action,
      comedy,
      horror,
      romance,
      documentaries,
    },
  }
}

const Home = ({
  netflixOriginals,
  trending,
  topRated,
  action,
  comedy,
  horror,
  romance,
  documentaries,
}) => {
  return (
    <>
      <Head>
        <title>Home - Netflix Clone</title>
        <meta name='description' content='Netflix Clone' />
      </Head>

      <main>
        <Banner movies={netflixOriginals} />
        <Row name='Netflix Originals' movies={netflixOriginals} />
        <Row name='Trending' movies={trending} />
        <Row name='Top Rated' movies={topRated} />
        <Row name='Action Movies' movies={action} />
        <Row name='Comedy Movies' movies={comedy} />
        <Row name='Horror Movies' movies={horror} />
        <Row name='Romance Movies' movies={romance} />
        <Row name='Documentaries' movies={documentaries} />
      </main>
    </>
  )
}

export default Home
