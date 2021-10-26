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
    <section className=''>
      <h2>{title}</h2>

      <section>
        {movies.map((movie) => (
          <Image
            src={baseImageUrl + movie.poster_path}
            alt={movie.name}
            width={100}
            height={100}
            key={movie.id}
          />
        ))}
      </section>
    </section>
  )
}

export default Row
