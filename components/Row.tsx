import Image from 'next/image'

const Row = ({ name, movies }) => {
  return (
    <section>
      <h2>{name}</h2>

      <section className='flex overflow-x-auto overflow-y-hidden'>
        {movies.map(({ id, poster_path, name, title }) => {
          const movieName = name || title

          return (
            <a
              key={id}
              href={
                'https://www.youtube.com/results?search_query=netflix+trailer+' +
                movieName
              }
              target='_blank'
              rel='noopener'
              aria-label={movieName}
            >
              {/* This div is a hack to properly size the images */}
              <div className='w-40'>
                <Image
                  src={'https://image.tmdb.org/t/p/original/' + poster_path}
                  alt={movieName}
                  width={160}
                  height={239.89}
                />
              </div>
            </a>
          )
        })}
      </section>
    </section>
  )
}

export default Row
