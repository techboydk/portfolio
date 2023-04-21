import React from 'react'
import './home.scss'
import profile from '../../../assets/images/profile.jpeg'

const Home = () => {
    return (
        <div className="home-section" id='home'>
            <div className="bg"></div>
            <div className="content">
                <div className="img-wrapper">
                    <span></span>
                    <img src={profile} alt="" />
                </div>
                <div className="name-title">
                    <span>Hi, I am</span>
                    <span className="text-primary">
                        Dipesh Yadav
                    </span>
                </div>
                <div className="subtitle">
                    I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                </div>
                <div className="sm-icons">
                    <a href='https://www.linkedin.com/in/dipesh-yadav-174911212/' rel="noreferrer" target='_blank' className="icon"><i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/techboydk' rel="noreferrer" target='_blank' className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href='https://twitter.com/techboy_Dk' rel="noreferrer" target='_blank' className="icon"><i className="fa-brands fa-square-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home
