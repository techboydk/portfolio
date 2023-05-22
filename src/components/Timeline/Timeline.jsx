import React from 'react'
import { Link } from 'react-router-dom'

const Timeline = ({ year, instituteName, title, desc, link, marks }) => {
    console.log(marks)
    return (
        <div className="timeline">
            <div className="timeline-year">{year}</div>
            <div className="timeline-right">
                <span className="bg-white">
                    <span className='circle'></span>
                    <span className='hz-line'></span>
                </span>
                <h2 className="text-primary">{title} {marks && <span>| {marks}</span>} </h2>
                <p className="text-sec">{instituteName} {link && <Link to={link} target="_blank" className='link'>| Link</Link>}</p>
                <p className="text-ter">{desc}</p>
            </div>
        </div>
    )
}

export default Timeline
