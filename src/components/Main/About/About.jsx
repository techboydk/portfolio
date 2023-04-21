import React from 'react'
import SectionHeading from '../../SectionHeading/SectionHeading'
import './about.scss'
import aboutImage from '../../../assets/images/about-image.jpg'

const About = () => {
    return (
        <div className="about-section" id='about'>
            <SectionHeading heading ="About me" bgText="about" />
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
                    <a href='https://drive.google.com/file/d/1CVS7MRfAcfCyzsAhNdzQjLVSNCg49bzZ/view?usp=sharing' target='_blank' rel="noreferrer"  className="header-btn btn"><span>Download CV</span></a>
                </div>
            </div>
        </div>
    )
}

export default About
