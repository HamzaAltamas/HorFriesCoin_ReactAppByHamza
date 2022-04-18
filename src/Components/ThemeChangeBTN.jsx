import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import $ from 'jquery'
import Tilt from 'react-parallax-tilt'

export const ThemeChangeBtn = () => {
  return (
    <>
      <div id="themeChangeBtn" className="fa-solid fa-lightbulb"></div>
    </>
  )
}

// jquery for theme button icon change
$(function () {
  $('#themeChangeBtn').click(function () {
    $('#themeChangeBtn').toggleClass('fa-moon')
    $('body').toggleClass('theme_changed')
  })
})
// jquery for theme button icon change
