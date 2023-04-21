import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="icon">
                <div className="sm-icons">
                    <div className="icon"><i className="fa-brands fa-linkedin"></i></div>
                    <div className="icon"><i className="fa-brands fa-github"></i></div>
                    <div className="icon"><i className="fa-brands fa-square-twitter"></i></div>
                </div>
            </div>
            <div className="text">© 2023, All right reserved <strong>Dipesh Yadav</strong></div>
        </div>
    )
}

export default Footer