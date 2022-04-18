import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Red_icon_card } from './All_Card'
import Slider from 'react-slick'

export default class Responsive extends Component {
  render() {
    var settings = {
      arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/zf86vWCh/download.png"
              cardtitle="Reflection"
              cardtext="8% will reflect to all holders for passive income 2% will allocated to HotFriesCoin treasury"
            />
          </div>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/ncxh292R/download.png"
              cardtitle="Fair Supply"
              cardtext="Our Initial supply is zero coins minted when they are bought, coins are burned when they are sold"
            />
          </div>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/Nj6JTMbw/download.png"
              cardtitle="Cheesy Protocol"
              cardtext="A percent of revenue generated on all product build on HFC will be shared back to all holders"
            />
          </div>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/ncxh292R/download.png"
              cardtitle="Fair Supply"
              cardtext="Our Initial supply is zero coins minted when they are bought, coins are burned when they are sold"
            />
          </div>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/zf86vWCh/download.png"
              cardtitle="Reflection"
              cardtext="8% will reflect to all holders for passive income 2% will allocated to HotFriesCoin treasury"
            />
          </div>
          <div>
            <Red_icon_card
              imgsrc="https://i.postimg.cc/Nj6JTMbw/download.png"
              cardtitle="Cheesy Protocol"
              cardtext="A percent of revenue generated on all product build on HFC will be shared back to all holders"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
