import React from 'react'
import './section-heading.scss'

const SectionHeading = (props) => {
    return (
        <div className="section-heading">
            <div className="heading">{props.heading}</div>
            <span className='dot-container'>
                <span className="dot"></span>
            </span>
            <span className='bg-text'>{props.bgText}</span>
        </div>
    )
}

export default SectionHeading
