import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav
      className='sticky top-0 z-10 flex justify-between w-full h-10 py-2 md:py-4 md:h-16'
      // style={{ backgroundColor: '#141414' }}
    >
      <Link href='/'>
        <a aria-label='Netflix'>
          <h1 className='text-red' style={{ fontSize: '1.5rem' }}>
            NETFLIX CLONE
          </h1>
        </a>
      </Link>

      <Image
        src='/profile-icon.png'
        width='32'
        height='32'
        className='object-contain'
      />
    </nav>
  )
}

export default Nav
