import React from 'react'

function H2(props) {
  return (
    <div className='md:text-2xl md:font-bold text-xl text-black pb-6'>
      {props.children}
    </div>
  )
}

export default H2
