import React from 'react'
import $ from 'jquery'

export const BacktoTopButton = () => {
  return (
    <>
      <div className="backTopbBtn">
        <i class="fa-solid fa-angles-up"></i>
      </div>
    </>
  )
}

$(function () {
  $('.backTopbBtn').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    })
  })

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    if (scrolling > 10) {
      $('.backTopbBtn').fadeIn(1000)
    } else {
      $('.backTopbBtn').fadeOut(1000)
    }
  })
})
