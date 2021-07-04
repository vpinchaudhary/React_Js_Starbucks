import React from 'react'

function ButtonLink(props) {
  let className = ''
  if (props.theme === 'primary') {
    className = 'text-white bg-primary-400 border border-white'
  } else if (props.theme === 'secondary') {
    className = 'text-white border-0 bg-primary-200'
  } else {
    className = 'text-black border-black border bg-white'
  }

  return (
    <a
      href='#'
      className={
        'inline-block text-sm font-semibold px-4 py-2 rounded-l-full rounded-r-full ' +
        className
      }
    >
      {props.title}
    </a>
  )
}

export default ButtonLink
