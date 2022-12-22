import React from 'react'
import './card.scss'

const Card = (props) => {
    return (
        <div className="card">
            <div className="skill-logo">
                <i className={props.skill.icon}></i>
            </div>
            <div className="skill-name">{props.skill.skillName}</div>
        </div>
    )
}

export default Card
