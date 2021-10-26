import { useEffect, useState } from 'react'

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

      <section className='flex overflow-x-auto overflow-y-hidden gap-x-1'>
        {movies.map((movie) => {
          const { id, poster_path, name } = movie

          return (
            // Replace this with next/image later
            <img
              key={id}
              src={baseImageUrl + poster_path}
              alt={name}
              loading='lazy'
              className='w-40 transition-transform duration-500 rounded cursor-pointer hover:scale-110'
            />
          )
        })}
      </section>
    </section>
  )
}

export default Row
