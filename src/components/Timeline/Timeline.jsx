import React from 'react'
import './timeline.scss'

const Timeline = () => {
  return (
    <div className="timeline-wrap">
        <div className="timeline">
            <div className="timeline-year">
                2020 - 2022
            </div>
            <div className="timeline-right">
                <span className="bg-white">
                    <span className='circle'></span>
                    <span className='hz-line'></span>
                </span>
                <h2 className="text-primary">Higher School Graduation</h2>
                <p className="text-sec">D.P. Inter College</p>
                <p className="text-ter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod assumenda recusandae nostrum tempora ab mollitia aspernatur quae nisi quasi!</p>
            </div>
        </div>
    </div>
  )
}

export default Timeline
