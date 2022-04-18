import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Tilt from 'react-parallax-tilt'

export const Mybalance = () => {
  return (
    <>
      <div className="container-fluid my_balance_container_outer">
        <div className="container text-center my_balance_container">
          <AnimationOnScroll animateIn="animate__wobble">
            <h3 className="mb-4">
              We are making De-Fi simple and easy for everyone and everywhere{' '}
              <br />
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
              <h4>HOTFRIESCOIN</h4>
              <p>A stable Progressive coin</p>
            </AnimationOnScroll>
          </div>
          <div className="row d-flex justify-content-center mt-4 mb-3">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <Tilt>
                <div className="my_balance_counter text-center">
                  <h3>
                    My Balance : <span>0</span> HFC = <span>0</span> USD ($){' '}
                  </h3>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
