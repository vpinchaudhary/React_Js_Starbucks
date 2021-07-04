import React from 'react'

function Link(props) {
  let theme = ''
  if (props.theme === 'black') {
    theme = 'text-black hover:underline'
  } else {
    theme = 'text-primary-300 underline hover:no-underline'
  }

  return (
    <a href={props.link} className={theme}>
      {props.children}
    </a>
  )
}

export default Link
