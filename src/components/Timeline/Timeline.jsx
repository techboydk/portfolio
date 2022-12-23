import React from 'react'

const Timeline = ({ year, instituteName, title, desc }) => {
    return (
        <div className="timeline">
            <div className="timeline-year">{year}</div>
            <div className="timeline-right">
                <span className="bg-white">
                    <span className='circle'></span>
                    <span className='hz-line'></span>
                </span>
                <h2 className="text-primary">{title} </h2>
                <p className="text-sec">{instituteName}</p>
                <p className="text-ter">{desc}</p>
            </div>
        </div>
    )
}

export default Timeline
