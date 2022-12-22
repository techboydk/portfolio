import React from 'react'
import './section-heading.scss'

const SectionHeading = () => {
    return (
        <div className="section-heading">
            <div className="heading">About Me</div>
            <span className='dot-container'>
                <sapn className="dot"></sapn>
            </span>
            <span className='bg-text'>About</span>
        </div>
    )
}

export default SectionHeading
