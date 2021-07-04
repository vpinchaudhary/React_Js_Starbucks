import React from 'react'
import H3 from './H3'
import H4 from './H4'
import img from '../images/socials.png'

function Footer() {
  return (
    <div className='bg-white shadow-reverse mt-8'>
      <div className='mx-auto container md:px-10 px-6'>
        <div
          className='
            flex
            lg:flex-row
            flex-col
            lg:space-x-12
            pb-10
            border-b-2 border-gray-200
          '
        >
          <div>
            <H3>About Us</H3>
            <div className='hidden lg:block'>
              <dl className='text-gray-500 font-medium space-y-4'>
                <dd className='hover:text-black'>Our Heritage</dd>
                <dd className='hover:text-black'>Our Coffee</dd>
                <dd className='hover:text-black'>Stories and News</dd>
                <dd className='hover:text-black'>Investor Relations</dd>
                <dd className='hover:text-black'>Policies and Standards</dd>
                <dd className='hover:text-black'>Customer Service</dd>
              </dl>
            </div>
          </div>
          <div>
            <H3>Careers</H3>
            <div className='hidden lg:block'>
              <dl className='text-gray-500 font-medium space-y-4'>
                <dd className='hover:text-black'>Culture and Values</dd>
                <dd className='hover:text-black'>
                  Inclusion, Diversity, and Equity
                </dd>
                <dd className='hover:text-black'>College and Achievement</dd>
                <dd className='hover:text-black'>U.S. Careers</dd>
                <dd className='hover:text-black'>International Careers</dd>
              </dl>
            </div>
          </div>
          <div>
            <H3>Social Impact</H3>
            <div className='hidden lg:block'>
              <dl className='text-gray-500 font-medium space-y-4'>
                <dd className='hover:text-black'>Ethical Sourcing</dd>
                <dd className='hover:text-black'>Leading in Sustainability</dd>
                <dd className='hover:text-black'>Strengthening Communities</dd>
                <dd className='hover:text-black'>Creating Opportunities</dd>
                <dd className='hover:text-black'>
                  Global Social Impact Report
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <H3>For Business Partners</H3>
            <div className='hidden lg:block'>
              <dl className='text-gray-500 font-medium space-y-4'>
                <dd className='hover:text-black'>Landlord Support Center</dd>
                <dd className='hover:text-black'>Suppliers</dd>
                <dd className='hover:text-black'>Corporate Gift Card Sales</dd>
                <dd className='hover:text-black'>
                  Office and Foodservice Coffee
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <H3>Order and Pickup</H3>
            <div className='hidden lg:block'>
              <dl className='text-gray-500 font-medium space-y-4'>
                <dd className='hover:text-black'>Order on the App</dd>
                <dd className='hover:text-black'>Order on the Web</dd>
                <dd className='hover:text-black'>Delivery</dd>
                <dd className='hover:text-black'>Order and Pickup Options</dd>
                <dd className='hover:text-black'>
                  Explore and Find Coffee for Home
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='py-6'>
          <img src={img} alt='' />
        </div>
        <ul
          className='
            flex
            space-y-2 w-11/12
            font-medium
            lg:justify-between lg:flex-row
            flex-col
          '
          type='none'
        >
          <li>Privacy Policy</li>
          <li className='hidden lg:block'>
            <span>|</span>
          </li>
          <li>Terms of Use</li>
          <li className='hidden lg:block'>
            <span>|</span>
          </li>
          <li>CA Supply Chain Act</li>
          <li className='hidden lg:block'>
            <span>|</span>
          </li>
          <li>Submit Your Idea</li>
          <li className='hidden lg:block'>
            <span>|</span>
          </li>
          <li>Cookie Preferences</li>
        </ul>
        <H4>© 2021 Starbucks Coffee Company. All rights reserved.</H4>
      </div>
    </div>
  )
}

export default Footer
