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
            className='absolute top-0 left-0 right-0 min-h-[80vh] object-cover w-screen hidden md:block rounded-none'
          />

          <section className='min-h-[70vh] relative z-10 items-center hidden py-4 md:flex '>
            <div className='flex flex-col w-2/3 gap-y-4'>
              <h2 className='text-4xl'>{name}</h2>
              <p>{overview}</p>
              <div className='flex gap-x-4'>
                <Button type='primary'>Play</Button>
                <Button type='secondary'>More Info</Button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default Banner
