import React from 'react'
import SectionHeading from '../../SectionHeading/SectionHeading'
import './about.scss'
import aboutImage from '../../../assets/images/about-image.jpg'

const About = () => {
    return (
        <div className="about-section">
            <SectionHeading />
            <div className="row">
                <div className="column left">
                    <div className="img-container">
                        <span></span><span></span><span></span><span></span>
                        <div className="img">
                            <img src={aboutImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="name-title">
                        <span>Hi, I am</span>
                        <span className="text-primary">
                            Dipesh Yadav
                        </span>
                    </div>
                    <div className="list">
                        <div className="list-item"><strong>First Name</strong>: Dipesh</div>
                        <div className="list-item"><strong>Last Name</strong>: Yadav</div>
                        <div className="list-item"><strong>Age</strong>: 21 Years</div>
                        <div className="list-item"><strong>Nationality</strong>: Indian</div>
                        <div className="list-item"><strong>Languages</strong>: English, Hindi</div>
                        <div className="list-item"><strong>Freelance</strong>: Available</div>
                    </div>
                    <div className="header-btn btn"><span>Download CV</span></div>
                </div>
            </div>
        </div>
    )
}

export default About
