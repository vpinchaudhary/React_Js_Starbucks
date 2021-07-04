import React from 'react'
import H4 from './H4'
import H3 from './H3'
import Link from './Link'

function TnC() {
  return (
    <div className='bg-secondary-50'>
      <div className='md:px-10 px-6 py-16 container mx-auto text-sm'>
        <H4>At paticipating stores. Restrictions apply.</H4>
        <div className='flex md:space-x-8 md:flex-row flex-col'>
          <div className='mt-4 md:w-1/2 w-full'>
            <H3>EARNING STARS</H3>
            <H4>
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </H4>
            <H4>
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </H4>
            <H4>
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </H4>
            <H3>BENEFITS</H3>
            <H4>
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </H4>
          </div>
          <div className='mt-4 md:w-1/2 w-full'>
            <H3>TERMS OF USE</H3>
            <H4>
              For full program details visit{' '}
              <Link>starbucks.com/rewards/terms</Link>
            </H4>
            <H4>
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details.
            </H4>
            <H4>
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. <Link>Visit the Starbucks Store Locator </Link>and
              search for locations honoring “Redeem Rewards”.
            </H4>
            <H4>
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </H4>
            <H3>REDEEMING REWARDS</H3>
            <H4>
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </H4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TnC
