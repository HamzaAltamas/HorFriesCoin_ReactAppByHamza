import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Tilt from 'react-parallax-tilt'

export const StableProgressive = () => {
  return (
    <>
      <div className="container-fluid Stable_progressive_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="banner_img_animation d-flex align-items-center">
                <Tilt>
                  <img
                    className="img-fluid common_animation"
                    src="https://www.hotfriescoin.com/static/media/coin-lock.783cb745.png"
                  />
                </Tilt>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 d-flex align-items-center">
              <div className="Stable_progressive_text">
                <h3>Now we are Bringing : Stable Progressive</h3>
                <p>
                  The Concept aims at building a currency based strictly on
                  stable coin and paying fees each time a coin is bought or
                  sold, the fees paid is then returned to all holders which will
                  make the value of the coin to continuously increase no matter
                  of a buy or sold transaction. THAT IS POWERFUL INNOVATION. The
                  First coin that only increases in value and never decreases.
                  <br />
                  <br />
                  By Holding Hot Fries coin you will earn large interest (584%
                  and up) . <br />
                  Because 10% fees that will compound each transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
