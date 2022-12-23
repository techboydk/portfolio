import React from 'react'
import './resume.scss'
import SectionHeading from '../../SectionHeading/SectionHeading'
import Timeline from '../../Timeline/Timeline'

const Resume = () => {
  return (
<div className="resume-section">
    <SectionHeading heading="my resume" bgText = "Resume"/>
    <div className="row">
        <div className="column">
            <div className="education-timeline">
                <div className="title"><i className="fa-solid fa-graduation-cap"></i>Educational Qualification</div>
                <Timeline/>
            </div>
        </div>
        <div className="column">
            <div className="education-timeline">
                <div className="title"><i className="fa-solid fa-graduation-cap"></i>Educational Qualification</div>
                <Timeline/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Resume
