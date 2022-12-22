import React from 'react'
import Card from '../../Card/Card'
import SectionHeading from '../../SectionHeading/SectionHeading'
import './skill.scss'
import { Skills } from './skills'

const Skill = () => {
  return (
    <div className="skill-section">
        <SectionHeading heading="my skills" bgText="skills"/>
        <div className="skill-wrapper">
            <div className="cards">
                {
                    Skills.map((item)=>{
                        return(
                            <Card skill={item} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Skill
