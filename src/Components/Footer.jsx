import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import '../index.css'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_conatiner mt-5">
        <div className="container">
          <div className="row">
            <div className="footer_items col-lg-3 col-md-3">
              <h6>About</h6>
              <ul className="mt-3 p-0 ">
                <li style={{ margintop: '0' }}>
                  <Nav.Link
                    style={{ marginLeft: '0' }}
                    className="d-flex align-items-center"
                    as={Link}
                    to="/HFC"
                  >
                    Hotfriescoin
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    style={{ marginLeft: '0' }}
                    className="d-flex align-items-center"
                    as={Link}
                    to="/tokenomic"
                  >
                    Tokenomic
                  </Nav.Link>
                </li>
                <li>
                  <a href="#">Whitepaper</a>
                </li>
              </ul>
            </div>
            <div className="footer_items col-lg-3 col-md-3">
              <h6>RESOURCES</h6>
              <ul className="mt-3 p-0 ">
                <li style={{ margintop: '0' }}>
                  <a href="#">Aduit</a>
                </li>
                <li>
                  <a href="#">How to buy HFC</a>
                </li>
                <li>
                  <a href="#">User Support</a>
                </li>
                <li>
                  <a href="#">Referral Program</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div className="footer_items col-lg-3 col-md-3">
              <h6>DEVELOPERS</h6>
              <ul className="mt-3 p-0 ">
                <li style={{ margintop: '0' }}>
                  <a href="#">Bug Bounty</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
              </ul>
            </div>
            <div className="footer_items col-lg-3 col-md-3">
              <h6>CONTACT US</h6>
              <ul id="socialicons" className="mt-3 p-0 d-flex  ">
                <li style={{ margintop: '0' }}>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-github-square"></i>
                  </a>
                </li>
              </ul>
              <ul id="socialicons" className="mt-3 p-0 d-flex  ">
                <li style={{ margintop: '0' }}>
                  <a href="#">
                    <i class="fa-solid fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
