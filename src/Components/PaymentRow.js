import React from 'react'

function PaymentRow(props) {
  return (
    <div className='flex border-gray-300 border-b flex-col pb-10'>
      {props.children}
    </div>
  )
}

export default PaymentRow
