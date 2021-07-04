import React from 'react'
import ButtonLink from './ButtonLink'

function Nav() {
  return (
    <div className='sticky top-0 bg-primary-400 px-4 py-1.5 flex items-center justify-between z-20'>
      <div className='font-extrabold text-sm text-white tracking-wider'>
        STARBUCKS® REWARDS
      </div>
      <div className='flex-shrink-0'>
        <ButtonLink title='Join in the app' theme='primary' />
      </div>
    </div>
  )
}

export default Nav
