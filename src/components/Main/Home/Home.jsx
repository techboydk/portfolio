import React from 'react'
import './home.scss'

const Home = () => {
    return (
        <div className="home-section" id='home'>
            <div className="bg"></div>
            <div className="content">
                <div className="img-wrapper">
                    <span></span>
                    <img src={"https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png"} alt="" />
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
                    <a href='https://www.linkedin.com/in/dipesh-yadav-174911212/' rel="noreferrer" target='_blank' className="icon">
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-linkedin hovered"></i>
                    </a>
                    <a href='https://github.com/techboydk' rel="noreferrer" target='_blank' className="icon">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-github hovered"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
