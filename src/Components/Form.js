import React from 'react'
import H1 from './H1'
import H4 from './H4'
import ButtonLink from './ButtonLink'
import Link from './Link'

function Form() {
  return (
    <div className='flex container lg:max-w-3xl max-w-md mx-auto'>
      <div className='py-28 pl-4 space-y-6'>
        <H1>Star Codes</H1>
        <H4>
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </H4>
        <input
          className='
            p-2
            text-gray-700
            w-full
            h-12
            border-gray-600 border-2
            rounded-lg
            outline-none
          '
          type='text'
          placeholder='Enter your Star Code'
          name=''
          id=''
        />
        <div className='flex justify-end'>
          <ButtonLink title='Submit' />
        </div>
        <H4>
          Have a receipt but don't have a code?
          <br />
          Go to <Link>starbucks-stars.com</Link> opens in new window to upload
          your receipt and collect your Stars.
        </H4>
        <H1>Questions?</H1>
        <H4>
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions
          <Link> right over here.</Link>
        </H4>
      </div>
    </div>
  )
}

export default Form
