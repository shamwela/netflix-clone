import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav
      className='sticky top-0 z-10 flex items-center justify-between w-full py-2 min-h-10 md:py-4 md:min-h-16'
      // style={{ backgroundColor: '#141414' }}
    >
      <Link href='/'>
        <a aria-label='Netflix'>
          <h1 className='text-base text-red md:text-2xl'>NETFLIX CLONE</h1>
        </a>
      </Link>

      <Image
        src='/profile-icon.png'
        width='32'
        height='32'
        className='object-contain'
        alt=''
      />
    </nav>
  )
}

export default Nav
