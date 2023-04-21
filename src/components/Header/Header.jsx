import React, { useRef, useState, useLayoutEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import './Header.scss'

const Header = () => {
    const [show, setToShow] = useState(false);
    const header = useRef();
    useLayoutEffect(() => {
        const animate = header.current.getBoundingClientRect().bottom;

        const onScroll = () => {
            if (animate <= window.scrollY) {
                header.current.classList.add("fixed");
            } else {
                header.current.classList.remove("fixed");
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [])

    const handleDisplay = () => {
        !show ? setToShow(!show) : setToShow(!show);
    }

    return (
        <div className="header" ref={header}>
            <div className="logo">
                Dipesh Yadav
            </div>
            <div className="mobile-menu">
                <div className="menu-btn btn" onClick={handleDisplay}>
                    <span></span><span></span><span></span>
                </div>
                <div className={show ? "menu-container active" : "menu-container"} >
                    <div className="close-btn btn" onClick={handleDisplay}>
                        <span></span><span></span>
                    </div>
                    <div className="menu-items">
                        <HashLink smooth to='#home' onClick={handleDisplay} className="item">Home</HashLink>
                        <HashLink smooth to='#mywork' onClick={handleDisplay} className="item">My Work</HashLink>
                        <HashLink smooth to='#contact' onClick={handleDisplay} className="item">contact</HashLink>
                        <HashLink smooth to='#resume' onClick={handleDisplay} className="item">resume</HashLink>
                        <HashLink smooth to='#myskill' onClick={handleDisplay} className="item">My Skill</HashLink>
                        <HashLink smooth to='#about' className="item">About</HashLink>
                    </div>
                    <HashLink smooth to="#contact" onClick={handleDisplay} className="header-btn btn"><span>Hire Me</span></HashLink>

                </div>
            </div>
            <div className="menu-items">
                <HashLink smooth to='#home' className="item">Home</HashLink>
                <HashLink smooth to='#mywork' className="item">My Work</HashLink>
                <HashLink smooth to='#contact' className="item">contact</HashLink>
                <HashLink smooth to='#resume' className="item">resume</HashLink>
                <HashLink smooth to='#myskill' className="item">My Skill</HashLink>
                <HashLink smooth to='#about' className="item">About</HashLink>
            </div>
            <HashLink smooth to="#contact"className="header-btn btn"><span>Hire Me</span></HashLink>
        </div>
    )
}

export default Header
