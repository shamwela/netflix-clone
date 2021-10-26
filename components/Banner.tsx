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

  const { name, overview } = movie

  return (
    <section
      className='object-contain'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '448px',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className='flex flex-col gap-y-4' style={{ maxWidth: '40rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>{name}</h2>
        <p>{overview}</p>
        <div>
          <button className='mr-4'>Play</button>
          <button>More Info</button>
        </div>
      </div>
    </section>
  )
}

export default Banner
