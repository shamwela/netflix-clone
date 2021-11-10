import { useEffect, useState } from 'react'
import Button from './Button'

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
          {/* Really hard to implement this with Next.js Image */}
          <img
            src={`https://image.tmdb.org/t/p/original${backdropPath}`}
            alt={name}
            className='absolute top-0 left-0 right-0 hidden object-cover w-screen rounded-none md:block'
            style={{ height: 'var(--banner-image-height)' }}
          />

          <section
            className='relative z-10 items-center hidden py-4 md:flex'
            style={{ minHeight: 'var(--banner-text-section-height)' }}
          >
            <section className='flex flex-col max-w-[45rem] gap-y-4'>
              <h2 className='text-[2rem] md:text-[2.75rem]'>{name}</h2>
              <p
                className='text-[1.4vw]'
                style={{ textShadow: '2px 2px 4px rgb(0 0 0 / 45%)' }}
              >
                {overview}
              </p>
              <section className='flex gap-x-4'>
                <Button type='primary'>Play</Button>
                <Button type='secondary'>More Info</Button>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  )
}

export default Banner
