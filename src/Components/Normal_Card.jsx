import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { NormalCard } from './All_Card'

export const NormalCards = () => {
  return (
    <>
      <div className="container normal_card_container">
        <AnimationOnScroll animateIn="animate__wobble">
          <div className="row">
            <NormalCard
              cardtitle="Continuously Increase In Value"
              cardtxt="The only Currency that only increase Value and Never decreases, Because of our Innovative Tokenomics 10% fees paid All Buy and sell Transactions"
            />
            <NormalCard
              cardtitle="100% backed and non-custodial"
              cardtxt="The only Currency that only increase Value and Never decreases, Because of our Innovative Tokenomics 10% fees paid All Buy and sell Transactions"
            />
            <NormalCard
              cardtitle="Fair and Transparent"
              cardtxt="The only Currency that only increase Value and Never decreases, Because of our Innovative Tokenomics 10% fees paid All Buy and sell Transactions"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </>
  )
}
