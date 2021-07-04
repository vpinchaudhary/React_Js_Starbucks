import React from 'react'

function FavoutiteBanner(props) {
  return (
    <div
      className='
          flex
          flex-col
          md:flex-row
          p-6
          bg-primary-100
        '
    >
      <div className='w-1/2'>
        <img src={props.image} alt='' />
      </div>

      <div
        className='
        w-1/2
        flex flex-col items-center
            text-center
            pt-3
          '
      >
        {props.children}
      </div>
    </div>
  )
}

export default FavoutiteBanner
