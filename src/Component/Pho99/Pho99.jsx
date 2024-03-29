import React from 'react'
import "./pho99.css"
import pho from '../../assets/pho.png'

const Pho99 = () => {
  return (
    <>
     <div className="container mx-auto px-12 pho section-margin">
        <div className="grid  lg:grid-cols-2  md:grid-cols-1 gap-4">
          <div className="left">
            <div className="home-text">
              <div className="title">Our Story</div>
              <div className="content">Our Vietnamese restaurant is rooted in a love for sharing the authentic flavors of our culture through fresh, traditional dishes. Come savor the stories of Vietnam with us.</div>
              <div className="button"> Learn More</div>
            </div>
          </div>
          <div className="right">
             <img src={pho} alt="" />
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Pho99
