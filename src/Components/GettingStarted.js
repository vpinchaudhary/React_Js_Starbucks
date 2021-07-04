import React from 'react'
import H2 from './H2'
import H4 from './H4'
import getting1 from '../images/getting-started-1.webp'
import getting2 from '../images/getting-started-2.webp'
import getting3 from '../images/getting-started-3.webp'
import GetItem from './GetItem'
import Link from './Link'

function GettingStarted() {
  return (
    <div className='px-4 text-center my-10'>
      <div className='pb-4'>
        <H2>Getting started is easy</H2>
        <H4>Earn Stars and get rewarded in a few easy steps.</H4>
      </div>
      <div className='text-left flex flex-col md:flex-row'>
        <span className='md:hidden'>
          <GetItem image={getting1} title='Download the Starbucks® app'>
            <Link>Join in the app</Link> to get access to the full range of
            Starbucks® Rewards benefits. You can also <Link>join online.</Link>
          </GetItem>
        </span>
        <span className='hidden md:block'>
          <GetItem image={getting1} title='Create an account'>
            To get started, <Link>join now</Link>. You can also{' '}
            <Link> join online</Link> to get access to the full range of
            Starbucks® Rewards benefits
          </GetItem>
        </span>
        <GetItem image={getting2} title='Order and pay how you’d like'>
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways. <Link>Learn how</Link>
        </GetItem>
        <GetItem image={getting3} title='Earn Stars, get Rewards'>
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </GetItem>
      </div>
    </div>
  )
}

export default GettingStarted
