import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import './main.scss'

const Main = () => {
  return (
    <div className="main">
        <div className="bglines">
            <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="section-container">
          <Home/>
          <About/>
        </div>
    </div>
  )
}

export default Main
