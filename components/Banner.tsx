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
  }, [movies])

  return (
    <>
      {name && backdropPath && (
        <>
          {/* Used normal <img> tag here because it is really hard to implement this with Next.js Image */}
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
                <Button type='primary'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3 2.69127C3 1.93067 3.81547 1.44851 4.48192 1.81506L21.4069 11.1238C22.0977 11.5037 22.0977 12.4963 21.4069 12.8762L4.48192 22.1849C3.81546 22.5515 3 22.0693 3 21.3087V2.69127Z'
                      fill='black'
                    ></path>
                  </svg>
                  Play
                </Button>
                <Button type='secondary'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='Hawkins-Icon Hawkins-Icon-Standard'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                      fill='currentColor'
                    ></path>
                  </svg>
                  More Info
                </Button>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  )
}

export default Banner
