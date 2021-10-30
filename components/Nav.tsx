import Image from 'next/image'

const Nav = () => {
  return (
    <nav
      className='sticky top-0 z-10 flex justify-between w-full py-4 min-h-10'
      // style={{ backgroundColor: '#141414' }}
    >
      <h1 className='text-red' style={{ fontSize: '1.5rem' }}>
        NETFLIX CLONE
      </h1>

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
