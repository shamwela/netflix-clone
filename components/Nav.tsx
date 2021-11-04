import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })

    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <nav
      className={`${
        show && 'bg-primary-background'
      } fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full py-2 md:py-4 `}
      style={{ minHeight: 'var(--nav-height)' }}
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
