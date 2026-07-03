import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

function Main() {
  return (
    <div className="main">
      <img src={image1} alt="messi" width="300px"></img>
      <img src={image2} alt="ramanujan" width="300px"></img>
      <img src={image3} alt="magnus" width="300px"></img>
    </div>
  )
}

export default Main