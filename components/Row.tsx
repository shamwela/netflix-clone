import { useEffect, useState } from 'react'
import Image from 'next/image'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3' + fetchUrl)
      const { results } = await response.json()
      setMovies(results)
    }

    fetchMovies()
  }, [])

  return (
    <section>
      <h2>{title}</h2>

      <section className='flex overflow-x-auto overflow-y-hidden'>
        {movies.map(({ id, poster_path, name }) => (
          <a
            key={id}
            href={
              'https://www.youtube.com/results?search_query=netflix+trailer+' +
              name
            }
            target='_blank'
            rel='noopener'
          >
            {/* This div is a hack to properly size the images */}
            <div className='w-40'>
              <Image
                src={'https://image.tmdb.org/t/p/original/' + poster_path}
                alt={name}
                width={160}
                height={239.89}
              />
            </div>
          </a>
        ))}
      </section>
    </section>
  )
}

export default Row
