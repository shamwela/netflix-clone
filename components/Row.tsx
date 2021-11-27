import Image from 'next/image'

const Row = ({ name, movies }) => {
  return (
    <section className='my-[3vw]'>
      <h2 className='text-[#999999] text-[1.1875rem] md:text-[1.375rem]'>
        {name}
      </h2>

      <section className='flex overflow-x-auto overflow-y-hidden gap-x-1'>
        {movies.map(({ id, poster_path, name, title }) => {
          const movieName = name || title

          return (
            <a
              key={id}
              href={`https://www.youtube.com/results?search_query=Netflix+${movieName}+Trailer`}
              target='_blank'
              rel='noreferrer'
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
