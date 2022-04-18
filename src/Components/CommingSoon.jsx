import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Tilt from 'react-parallax-tilt'
import { Button } from 'react-bootstrap'

export const CommingSoon = () => {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row commingSoon_contents">
          <div className="col-lg-7 col-md-7 d-flex align-items-center">
            <div>
              <h1>Comming Soon</h1>
              <Button variant="danger">Lottery</Button>
              <Button variant="danger">Prediction</Button>
              <Button variant="danger">Drivative Market</Button>
              <Button variant="danger">Collateral Free Landing</Button>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-center">
            <div className="Comming_soon_animation_div">
              <img
                src="https://i.postimg.cc/g00PtBYM/comming-soon-b8f232e5.png"
                className="img-fluid common_animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
