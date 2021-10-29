import { useEffect, useState } from 'react'

const Banner = ({ API_KEY }) => {
  const [name, setName] = useState('')
  const [overview, setOverview] = useState('')
  const [backdropPath, setBackdropPath] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      // fetch Netflix Originals
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
      )
      const { results } = await response.json()
      const randomNumber = Math.floor(Math.random() * results.length)
      const randomMovie = results[randomNumber]
      const { name, overview, backdrop_path } = randomMovie

      setName(name)
      setOverview(overview)
      setBackdropPath(backdrop_path)
    }

    fetchMovies()
  }, [])

  return (
    <section
      className='object-contain'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '448px',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdropPath}')`,
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
