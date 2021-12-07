import Banner from 'components/Banner'
import Row from 'components/Row'
import Head from 'next/head'

export const getStaticProps = async () => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const API_KEY = process.env.API_KEY
  const netflixOriginalsUrl = `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`
  const trendingUrl = `${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`
  const topRatedUrl = `${baseUrl}movie/top_rated?api_key=${API_KEY}&language=en-US`
  const actionUrl = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`
  const comedyUrl = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`
  const horrorUrl = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`
  const romanceUrl = `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`

  const results = await Promise.all([
    fetch(netflixOriginalsUrl),
    fetch(trendingUrl),
    fetch(topRatedUrl),
    fetch(actionUrl),
    fetch(comedyUrl),
    fetch(horrorUrl),
    fetch(romanceUrl),
  ])
  const dataPromises = results.map((result) => result.json())
  const finalData = await Promise.all(dataPromises)

  return {
    props: { finalData },
  }
}

const Home = (finalData) => {
  const [
    netflixOriginals,
    trending,
    topRated,
    action,
    comedy,
    horror,
    romance,
  ] = finalData.finalData.map((data) => data.results)

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
      </main>
    </>
  )
}

export default Home
