import { useEffect, useState } from 'react'
import Button from './Button'

const minHeight = '80vh'

const Banner = ({ movies }) => {
  const [name, setName] = useState('')
  const [overview, setOverview] = useState('')
  const [backdropPath, setBackdropPath] = useState('')

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * movies.length)
    const randomMovie = movies[randomNumber]
    const { name, overview, backdrop_path } = randomMovie

    setName(name)
    setOverview(overview)
    setBackdropPath(backdrop_path)
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
              minHeight: minHeight,
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
          <section style={{ minHeight: minHeight }}></section>
        </>
      )}
    </>
  )
}

export default Banner
