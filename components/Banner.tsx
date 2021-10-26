import { useEffect, useState } from 'react'

const Banner = ({ API_KEY }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchMovies = async () => {
      // Netflix Originals
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
      )
      const { results } = await response.json()
      setMovie(results[Math.floor(Math.random() * results.length)])
    }

    fetchMovies()
  }, [])

  const { name } = movie

  return (
    <section
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
        height: '20px',
      }}
    >
      <div>
        <h2>{name}</h2>
        <button>Play</button>
        <button>More Info</button>

        <p>{movie?.overview}</p>
      </div>
    </section>
  )
}

export default Banner
