import { useEffect, useState } from 'react'
import Button from './Button'

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
    <>
      {name && backdropPath && (
        <>
          <section
            // Used id here to colocate the paddings
            id='banner'
            className='absolute top-0 left-0 right-0 flex items-center object-contain w-full rounded'
            style={{
              minHeight: '80vh',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundImage: `url('https://image.tmdb.org/t/p/original${backdropPath}')`,
            }}
          >
            <div
              className='flex flex-col gap-y-4'
              style={{ maxWidth: '40rem' }}
            >
              <h2 style={{ fontSize: '2.5rem' }}>{name}</h2>
              <p className='hidden md:block'>{overview}</p>
              <div className='flex gap-x-4'>
                <Button type='primary'>Play</Button>
                <Button type='secondary'>More Info</Button>
              </div>
            </div>
          </section>
          <section style={{ minHeight: '80vh' }}></section>
        </>
      )}
    </>
  )
}

export default Banner
