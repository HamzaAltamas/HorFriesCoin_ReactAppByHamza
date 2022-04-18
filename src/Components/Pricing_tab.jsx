import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Tab, Tabs, Button } from 'react-bootstrap'
import { CommonInput } from './Common_Input'

export const PricingTab = () => {
  return (
    <>
      <div id="PricingTab" className="container-fluid pricing_tab_container">
        <div className="container">
          <div className=" row d-flex justify-content-center">
            <div className="col-lg-5">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="profile" title="BUY">
                  <CommonInput placeholder="0.0000" ButtonName="HFC" />
                  <div className="row text-center mb-3">
                    <svg
                      stroke="#da2b2b"
                      fill="#da2b2b"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="dark-red"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z"></path>
                      </g>
                    </svg>
                  </div>
                  <CommonInput placeholder="0.0000" ButtonName="BUSD" />
                  <div className="col-lg-12 mb-3 ">
                    <Button variant="danger" className="col-lg-12">
                      You Are Off Chain
                    </Button>
                  </div>

                  <div className="col-lg-12 mb-3 text-center common_box_shadows ConnectWalletBox">
                    <span>Connect your Wallet to Buy/Sell HFC</span>
                  </div>
                  <CommonInput
                    placeholder="Buy HFC for Referral Code"
                    ButtonName="BUSD"
                    inputname="Refferal Code"
                  />
                </Tab>
                <Tab eventKey="home" title="Sell">
                  <CommonInput
                    placeholder="0.0000"
                    ButtonName="HFC"
                    inputname="From"
                  />
                  <div className="row text-center mb-3">
                    <svg
                      stroke="#da2b2b"
                      fill="#da2b2b"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="dark-red"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z"></path>
                      </g>
                    </svg>
                  </div>
                  <CommonInput
                    placeholder="0.0000"
                    ButtonName="BUSD"
                    inputname="To"
                  />
                  <div className="col-lg-12 mb-3 ">
                    <Button variant="danger" className="col-lg-12">
                      Sell
                    </Button>
                  </div>
                </Tab>

                <Tab eventKey="contact" title="Send Recieve">
                  <CommonInput
                    placeholder="Your Wallet Address"
                    ButtonName="Address"
                    inputname="From"
                  />
                  <CommonInput
                    placeholder="0.0000"
                    ButtonName="HFC"
                    inputname="Amount"
                  />
                  <div className="row text-center mb-3">
                    <svg
                      stroke="#da2b2b"
                      fill="#da2b2b"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="dark-red"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z"></path>
                      </g>
                    </svg>
                  </div>
                  <CommonInput
                    placeholder="Receiver's Wallet Address"
                    ButtonName="Address"
                    inputname="To"
                  />
                  <div className="col-lg-12 mb-3 ">
                    <Button variant="danger" className="col-lg-12">
                      Transfer
                    </Button>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="row text-center Pricing_tab_txt mt-5">
              <p>
                "Add the HotFriesCoin contract address in wallet ( Trustwallet
                or Metamask)"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
