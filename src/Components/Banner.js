import React from 'react'
import H1 from './H1'
import ButtonLink from './ButtonLink'

function Banner() {
  return (
    <div className='aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2'>
      <div className='bg-primary-100 bg-mobile md:bg-desktop bg-no-repeat bg-cover bg-center text-center md:text-left p-5 flex items-center'>
        <div className='md:space-y-4'>
          <H1>
            FREE COFFEE
            <br /> IS A TAP AWAY
          </H1>
          <p className='md:text-xl pt-3'>Join now to start earning Rewards.</p>
          <div className='py-5'>
            <ButtonLink title='Join in the app' theme='secondary' />
          </div>
          <a href='#' className='md:text-xl underline hover:no-underline'>
            Or join online{' '}
          </a>
          <span className='text-xl hidden md:inline'>
            for the best <br />
            experience
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner
