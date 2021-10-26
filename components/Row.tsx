import { useEffect, useState } from 'react'

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

      <section className='flex overflow-x-auto overflow-y-hidden gap-x-1'>
        {movies.map((movie) => {
          const { id, poster_path, name } = movie

          return (
            // Replace this with next/image later
            <img
              key={id}
              src={'https://image.tmdb.org/t/p/original/' + poster_path}
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
