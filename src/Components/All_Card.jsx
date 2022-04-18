import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Tilt from 'react-parallax-tilt'

export const Red_icon_card = (Red_icon_card_Props) => {
  return (
    <>
      <div className="red_icon_card_outer">
        <Tilt>
          <div className="red_icon_card_inner">
            <div className="row">
              <div
                style={{ marginTop: '10px' }}
                className="col-lg-2 -col-md-2 col-sm-2"
              >
                <img className="img-fluid" src={Red_icon_card_Props.imgsrc} />
              </div>
              <div
                style={{ marginTop: '10px' }}
                className="col-lg-9 col-md-9 col-sm-9"
              >
                <h5>{Red_icon_card_Props.cardtitle}</h5>
                <span>{Red_icon_card_Props.cardtext}</span>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export const NormalCard = (N_card_props) => {
  return (
    <>
      <div className="col-lg-4 col-md-4">
        <Tilt>
          <div className="NormalCard">
            <h5>{N_card_props.cardtitle}</h5>
            <span>{N_card_props.cardtxt}</span>
          </div>
        </Tilt>
      </div>
    </>
  )
}
