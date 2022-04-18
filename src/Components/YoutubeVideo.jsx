import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Tilt from 'react-parallax-tilt'

export const YoutubeVideo = () => {
  return (
    <>
      <div className="container-fluid youtube_video_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <div className="yt_video_text">
                <h3>HotFriesCoin is the stable coin Killer</h3>
                <img
                  src="https://i.ibb.co/VgVmbYT/header-Dash.png`"
                  className="img-fluid mb-3"
                />
                <p>
                  We are Introducing new Concept that will change the financial
                  industry. We think Stable Coin is a very important innovation
                  to facilitate the adoption of cryptocurrency.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Tilt>
                <div className="YT_video">
                  <iframe
                    height="300"
                    src="https://www.youtube.com/embed/ERvFLRcY5CI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
