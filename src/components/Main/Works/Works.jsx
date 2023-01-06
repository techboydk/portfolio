import React from 'react'
import './works.scss'
import SectionHeading from '../../SectionHeading/SectionHeading'
import { workData } from '../../../assets/data/WorkData'
import WorkCard from '../../Card/WorkCard'

const Works = () => {
  return (
    <div className="works-section">
        <SectionHeading heading="My works" bgText="works"/>
        <div className="tags">
          <div className="header-btn btn active-tag"><span>All</span></div>
          <div className="header-btn btn"><span>Html & Css</span></div>
          <div className="header-btn btn"><span>React js</span></div>
        </div>
        <div className="card-container">
          {workData.map((item)=>{
            return <WorkCard details={item}/>;
          })}
        </div>
    </div>
  )
}

export default Works
