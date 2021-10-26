import { useEffect, useState } from 'react'
import Image from 'next/image'

const baseUrl = 'https://api.themoviedb.org/3'
const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseUrl + fetchUrl)
      const { results } = await response.json()
      setMovies(results)
    }

    fetchData()
  }, [movies])

  return (
    <section>
      <h2>{title}</h2>

      <section className='flex gap-x-4'>
        {movies.map((movie) => (
          <div style={{ height: '100px' }}>
            <Image
              key={movie.id}
              src={baseImageUrl + movie.poster_path}
              alt={movie.name}
              width={999}
              height={999}
              className='object-contain h-full transition-transform duration-500 object object-w-full hover:scale-110'
            />
          </div>
        ))}
      </section>
    </section>
  )
}

export default Row
