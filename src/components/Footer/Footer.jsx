import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="icons">
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
            <div className="text">© 2023, All right reserved <strong>Dipesh Yadav</strong></div>
        </div>
    )
}

export default Footer