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

    const handleClick = (e) => {
        if (e.target.parentElement?.classList?.contains('menu-items') || e.target?.classList?.contains('item')) {
            e.target.parentElement.querySelector('.active')?.classList?.contains('active') && e.target.parentElement.querySelector('.active')?.classList?.remove('active');
            e.target.parentElement.classList?.contains('menu-items') && e.target.classList?.add('active')
        }
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
                    <div className="menu-items" onClick={handleClick}>
                        <HashLink smooth to='#home' onClick={handleDisplay} className="item active">Home</HashLink>
                        <HashLink smooth to='#works' onClick={handleDisplay} className="item">My Work</HashLink>
                        <HashLink smooth to='#contact' onClick={handleDisplay} className="item">contact</HashLink>
                        <HashLink smooth to='#resume' onClick={handleDisplay} className="item">resume</HashLink>
                        <HashLink smooth to='#skills' onClick={handleDisplay} className="item">My Skill</HashLink>
                        <HashLink smooth to='#about' onClick={handleDisplay} className="item">About</HashLink>
                    </div>
                    <HashLink smooth to="#contact" onClick={handleDisplay} className="header-btn btn"><span>Hire Me</span></HashLink>

                </div>
            </div>
            <div className="menu-items" onClick={handleClick}>
                <HashLink smooth to='#home' className="item active">Home</HashLink>
                <HashLink smooth to='#works' className="item">My Work</HashLink>
                <HashLink smooth to='#contact' className="item">contact</HashLink>
                <HashLink smooth to='#resume' className="item">resume</HashLink>
                <HashLink smooth to='#skills' className="item">My Skill</HashLink>
                <HashLink smooth to='#about' className="item">About</HashLink>
            </div>
            <HashLink smooth to="#contact" className="header-btn btn"><span>Hire Me</span></HashLink>
        </div>
    )
}

export default Header
