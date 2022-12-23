import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import './main.scss'
import Resume from './Resume/Resume'
import Skill from './Skill/Skill'
import Works from './Works/Works'

const Main = () => {
  return (
    <div className="main">
        <div className="bglines">
            <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="section-container">
          <Home/>
          <About/>
          <Skill/>
          <Resume/>
          <Works/>
        </div>
    </div>
  )
}

export default Main
