import React from 'react'

function H3(props) {
  return (
    <div className='md:text-lg md:font-semibold text-black pb-4'>
      {props.children}
    </div>
  )
}

export default H3
