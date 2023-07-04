import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="introduce-box">
        <h1>Hello, I'm a Web Developer</h1>
        <p>My name is Phubet Rujirekanusorn aka "PhuRuji".</p>
        <p>I'm a <span className="bold-text">Junior Fullstack Developer</span>. I started working in May 2023.</p>
      </div>
      <div className="my-image">
        <img src="src/assets/no-bg-phuruji.png" alt="PhuRuji"/>
      </div>
    </div>
  )
}

export default Home
