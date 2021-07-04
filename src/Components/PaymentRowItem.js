import React from 'react'

function PaymentRowItem(props) {
  return (
    <div className='flex space-x-6 items-start md:w-1/2'>
      <img className='w-28 object-contain' src={props.image} alt='' />
      <div>{props.children}</div>
    </div>
  )
}

export default PaymentRowItem
