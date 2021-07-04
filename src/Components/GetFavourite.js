import React from 'react'
import H2 from './H2'
import FavouriteButton from './FavouriteButton'
import image from '../images/025.webp'
import FavoutiteBanner from './FavoutiteBanner'
import H4 from './H4'

function GetFavourite() {
  return (
    <div>
      <div className='bg-primary-50 pt-10 text-center'>
        <H2>Get your favorites for free</H2>
        <div className='flex items-center justify-between max-w-lg mx-auto'>
          <FavouriteButton theme='active'>25</FavouriteButton>
          <FavouriteButton>50</FavouriteButton>
          <FavouriteButton>150</FavouriteButton>
          <FavouriteButton>200</FavouriteButton>
          <FavouriteButton>400</FavouriteButton>
        </div>
      </div>
      <FavoutiteBanner image={image}>
        <H2>Customize your drink</H2>
        <H4>
          Make your drink just right with an extra espresso shot, dairy
          substitute or a dash of your favorite syrup.
        </H4>
      </FavoutiteBanner>
    </div>
  )
}

export default GetFavourite
