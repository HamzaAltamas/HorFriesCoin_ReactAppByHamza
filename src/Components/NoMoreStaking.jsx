import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Tilt from 'react-parallax-tilt'

export const NoMoreStacking = () => {
  return (
    <>
      <div className="container-fluid NoMoreStaCkingContainer">
        <div className="container text-center my_balance_container No_More_Stack_container">
          <AnimationOnScroll animateIn="animate__wobble">
            <h3 style={{ color: '#fff' }} className="mb-4">
              No More Staking, No More Farming, No More Liquidity Pools to Earn
            </h3>
          </AnimationOnScroll>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="mt-2 col-lg-4 col-md-4 d-flex justify-content-center">
                  <Tilt>
                    <button className="btn btn-outline-danger ">Buy</button>
                  </Tilt>
                </div>
                <div className="mt-2 col-lg-4 col-md-4 d-flex justify-content-center">
                  <Tilt>
                    <button className="btn btn-outline-primary ">Hold</button>
                  </Tilt>
                </div>
                <div className="mt-2 col-lg-4 col-md-4 d-flex justify-content-center">
                  <Tilt>
                    <button className="btn btn-outline-success ">Sell</button>
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <AnimationOnScroll animateIn="animate__rubberBand">
              <h4 style={{ color: '#fff' }}>HOTFRIESCOIN</h4>
              <p style={{ color: '#fff' }}>
                The World's First Stable Progressive Coin
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  )
}
