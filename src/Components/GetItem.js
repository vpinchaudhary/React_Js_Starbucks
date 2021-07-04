import React from 'react'
import H4 from './H4'
import H3 from './H3'

function GetItem(props) {
  let className = ''
  if (props.theme === 'extra') {
    className = 'h-28 w-28 flex-shrink-0 mr-3'
  } else {
    className = 'h-12 w-12 flex-shrink-0 mr-3'
  }
  return (
    <div className='flex flex-row md:flex-col md:text-center md:mx-4 items-center'>
      <div className={className}>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <H3>{props.title}</H3>
        <H4>{props.children}</H4>
      </div>
    </div>
  )
}

export default GetItem
