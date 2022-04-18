import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Tilt from 'react-parallax-tilt'

export const StableProgressiveCurrency = () => {
  return (
    <>
      <div className="container-fluid StableProgressiveCurrency_container_outer">
        <div className="container StableProgressiveCurrency_container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="StableProgressiveCurrency_animation d-flex justify-content-center">
                <img
                  src="https://i.postimg.cc/TYKk30BF/download.png"
                  className="img-fluid common_animation"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 d-flex align-items-center">
              <div className="StableProgressiveCurrency_txt">
                <AnimationOnScroll animateIn="animate__wobble">
                  <h2>A New Asset Class Built On Stablecoin.</h2>
                  <h3>Stable Progressive Currency</h3>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
