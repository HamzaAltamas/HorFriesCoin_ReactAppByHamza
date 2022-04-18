import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import CountUp from 'react-countup'

export const Counterup = () => {
  return (
    <>
      <div className="container-fluid counterup_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="counterup_box counterup_Border_right">
                <h4 className="Counterup_title">Price</h4>
                <h1 className="Counterup_number">
                  <CountUp end={15562} duration={5} />
                </h1>
                <h4 className="Counterup_value_name">USD (&)</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="counterup_box counterup_Border_right">
                <h4 className="Counterup_title">Total Supply</h4>
                <h1 className="Counterup_number">
                  <CountUp end={2860} duration={5} />
                </h1>
                <h4 className="Counterup_value_name">HFC</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="counterup_box counterup_Border_right">
                <h4 className="Counterup_title">Earning</h4>
                <h1 className="Counterup_number">
                  <CountUp end={444.1729} duration={5} />
                </h1>
                <h4 className="Counterup_value_name">USD ($)</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="counterup_box ">
                <h4 className="Counterup_title">MarketCap</h4>
                <h1 className="Counterup_number">
                  <CountUp end={4450.1729} duration={5} />
                </h1>
                <h4 className="Counterup_value_name">USD ($)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
