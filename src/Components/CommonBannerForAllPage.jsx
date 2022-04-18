import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Tilt from 'react-parallax-tilt'

export const CommonBanner = (BannerProps) => {
  return (
    <>
      <div className="container-fluid common_banner_container">
        <div className="container">
          <h1>{BannerProps.bannerheading}</h1>
        </div>
      </div>
    </>
  )
}
