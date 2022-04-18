import React from 'react'
import { HomeBanner } from '../Components/Home_Banner'
import { Mybalance } from '../Components/My_balance'
import { PricingTab } from '../Components/Pricing_tab'
import { Counterup } from '../Components/Counterup'
import { YoutubeVideo } from '../Components/YoutubeVideo'
import { StableProgressive } from '../Components/StablePrograsssive'
import { NoMoreStacking } from '../Components/NoMoreStaking'
import { RedIconCardSlick } from '../Components/RedIconCardSlick'
import { StableProgressiveCurrency } from '../Components/StableProgressiveCurrency'
import { NormalCards } from '../Components/Normal_Card'
import { CommingSoon } from '../Components/CommingSoon'

export const Home = () => {
  return (
    <>
      <title>HotFriesCoin | Home</title>
      <HomeBanner />
      <Mybalance />
      <PricingTab />
      <Counterup />
      <YoutubeVideo />
      <StableProgressive />
      <NoMoreStacking />
      <RedIconCardSlick />
      <StableProgressiveCurrency />
      <NormalCards />
      <CommingSoon />
    </>
  )
}
