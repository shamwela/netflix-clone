import Button from 'components/Button'
import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
      </Head>

      <main
        className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center p-4 bg-fixed bg-center bg-no-repeat bg-cover gap-y-4'
        style={{
          top: 'var(--nav-height)',
          backgroundImage:
            'url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png)',
        }}
      >
        <h1 className='text-3xl md:text-7xl text-shadow'>Lost your way?</h1>
        <p className='text-shadow md:text-2xl'>
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <Link href='/'>
          <a>
            <Button type='primary'>Netflix Home</Button>
          </a>
        </Link>

        <span
          className='fixed bottom-0 right-0 tracking-widest my-[2.5vw] mx-[4.8vw] text-xs text-shadow'
          style={{ color: 'rgba(229,229,229,.57)' }}
        >
          FROM{' '}
          <strong
            className='tracking-normal ml-[0.2em]'
            style={{ color: 'rgba(229,229,229,.77)' }}
          >
            LOST IN SPACE
          </strong>
        </span>
      </main>

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
        }
      `}</style>
    </>
  )
}

export default Custom404
