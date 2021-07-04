import React from 'react'
import H2 from './H2'
import H4 from './H4'
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import GetItem from './GetItem'
import Link from './Link'

function Extra() {
  return (
    <div className='px-4 text-center my-10'>
      <div className='pb-4'>
        <H2>Endless Extras</H2>
        <H4>
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </H4>
      </div>
      <div className='text-left flex flex-col md:flex-row'>
        <GetItem theme='extra' image={img1} title='Fun Freebies'>
          Not only can you earn free coffee, look forward to a birthday treat
          plus coffee and tea refills. Learn more
          <p className='pt-3'>
            <Link>Learn More.</Link>
          </p>
        </GetItem>
        <GetItem theme='extra' image={img2} title='Order &amp; pay ahead'>
          Enjoy the convenience of in-store, curbside or drive-thru pickup at
          select stores.
          <p className='pt-3'>
            <Link>Learn More.</Link>
          </p>
        </GetItem>
        <GetItem theme='extra' image={img3} title='Get to free faster'>
          Earn Stars even quicker with Bonus Star challenges, Double Star Days
          and exciting games.
          <p className='pt-3'>
            <Link>Learn More.</Link>
          </p>
        </GetItem>
      </div>
    </div>
  )
}

export default Extra
