import React from 'react'
import H2 from './H2'
import H4 from './H4'
import H3 from './H3'
import PaymentRow from './PaymentRow'
import PaymentRowItem from './PaymentRowItem'
import img1 from '../images/1A.png'
import img2 from '../images/1B.png'
import img3 from '../images/2A.png'
import img4 from '../images/2B.png'
import img5 from '../images/3A.png'

function PaymentDesc(porps) {
  return (
    <div className='px-4 bg-secondary-100'>
      <div className='text-center py-12'>
        <H2>Cash or card, you earn Stars</H2>
        <H4>
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </H4>
      </div>
      <div>
        <PaymentRow>
          <H2>1★ per dollar</H2>
          <div className='-mt-6'>
            <H4>Pay as you go</H4>
          </div>
          <div className='flex flex-col md:flex-row'>
            <PaymentRowItem image={img1}>
              <H3>Scan and pay separately</H3>
              <H4>Use cash or credit/debit card at the register.</H4>
            </PaymentRowItem>
            <PaymentRowItem image={img2}>
              <H3>Save payment in the app</H3>
              <H4>
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You’ll be able to order ahead or scan and pay at the
                register in one step.
              </H4>
            </PaymentRowItem>
          </div>
        </PaymentRow>
        <PaymentRow>
          <H2>2★ per dollar</H2>
          <div className='-mt-6'>
            <H4>Add funds in the app</H4>
          </div>
          <div className='flex flex-col md:flex-row'>
            <PaymentRowItem image={img3}>
              <H3>Preload</H3>
              <H4>
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </H4>
            </PaymentRowItem>
            <PaymentRowItem image={img4}>
              <H3>Register your guft card</H3>
              <H4>
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </H4>
            </PaymentRowItem>
          </div>
        </PaymentRow>
        <PaymentRow>
          <H2>Up to 3★ per dollar</H2>
          <div className='-mt-6'>
            <H4>With Starbucks® Rewards Visa® Card</H4>
          </div>
          <div className='flex flex-col'>
            <PaymentRowItem image={img5}>
              <H3>Earn strs even faster</H3>
              <H4>
                Earn Stars on all purchases you make with our credit card opens
                in new window in and outside of Starbucks. Earn 1 Star per $1
                when you digitally preload your Starbucks Card with your
                Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you
                pay with that preloaded Starbucks Card.
              </H4>
            </PaymentRowItem>
          </div>
        </PaymentRow>
      </div>
    </div>
  )
}

export default PaymentDesc
