import Button from 'components/Button'
import Head from 'next/head'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not found - Netflix Clone</title>
      </Head>

      <main>
        <h1 className='text-[6em] mb-[2vw]'>Lost your way?</h1>
        <p className='text-[2.2em] mb-[1em]'>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Button type='primary'>Netflix Home</Button>
      </main>
    </>
  )
}

export default Custom404
