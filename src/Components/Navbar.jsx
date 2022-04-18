import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap'
import '../index.css'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

export const NavBar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p className="Modal_title fw-bold text-center text-uppercase">
            CONNECT WALLET USING
          </p>
          <img
            src="https://i.ibb.co/VgVmbYT/header-Dash.png`"
            className="img-fluid mb-3"
          />
          <div className="d-flex justify-content-center mt-3">
            <Tilt>
              <button type="button" className="btn btn-danger">
                Meta Mask
              </button>
            </Tilt>
          </div>
          <div className="or d-flex justify-content-center mt-3 mb-3 fw-bold ">
            OR
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Tilt>
              <button type="button" className="btn btn-danger">
                WalletConnect
              </button>
            </Tilt>
          </div>
          <div className="modal_txt d-flex justify-content-center mt-3 fw-bold">
            Matamask button is only available for desktop and Dapp browsers. To
            access your metamask wallet use a desktop or walletconnect on
            browser like chrome and Safari.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Tilt>
            <Button
              className="Modal_close_button"
              variant="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Tilt>
        </Modal.Footer>
      </Modal>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" href="" className="NavIcon">
            <Tilt>
              <img
                className="img-fluid common_animation"
                src="https://www.hotfriescoin.com/static/media/logo.690d49e0.png"
              />
            </Tilt>
          </Navbar.Brand>
          <button
            aria-controls="navbarScroll"
            aria-label="Toggle navigation"
            class="navbar-toggler collapsed"
            type="button"
          >
            <p id="navtoggleicon" className="fa-solid fa-bars"></p>
          </button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                style={{ marginLeft: '0' }}
                className="d-flex align-items-center"
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>

              <Nav.Link
                className="d-flex align-items-center"
                href="#PricingTab"
              >
                Buy / Sell
              </Nav.Link>
              <Tilt>
                <Nav.Link
                  variant="primary"
                  onClick={handleShow}
                  id="ModalButton"
                  href="#"
                >
                  Connect Wallet
                </Nav.Link>
              </Tilt>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

// jquery for bootstrap navbar start
$(function () {
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('collapsed')
    $('.navbar-collapse').toggleClass('show')
    $('#navtoggleicon').toggleClass('fa-xmark')
  })
})
// jquery for bootstrap navbar end

// nav scroll fixed start
$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()
    if (scrolling > 10) {
      $('nav').addClass('navdown')
    } else {
      $('nav').removeClass('navdown')
    }
  })
})
// nav scroll fixed end
