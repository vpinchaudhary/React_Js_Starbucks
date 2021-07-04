import React from 'react'

function FavouriteButton(props) {
  let theme = ''
  if (props.theme === 'active') {
    theme = ' border-primary-300'
  } else {
    theme = ' border-primary-50'
  }

  return (
    <div>
      <button
        className={
          'md:text-2xl md:font-semibold text-xl flex-grow border-b-4 p-1' +
          theme
        }
      >
        {props.children}
        <span className='text-secondary-200 text-sm'>★</span>
      </button>
    </div>
  )
}

export default FavouriteButton
