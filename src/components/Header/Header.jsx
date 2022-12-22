import React, { useRef, useState,useLayoutEffect } from 'react'
import './Header.scss'

const Header = () => {
    const[show, setToShow] = useState(false);
    const header = useRef();
    useLayoutEffect(() => {
      const animate = header.current.getBoundingClientRect().bottom;

      const onScroll = ()=>{
        if(animate<=window.scrollY){
            header.current.classList.add("fixed");

            console.log(animate)
            console.log(window.scrollY)
        }else{
            header.current.classList.remove("fixed");
        }
      };

      window.addEventListener("scroll", onScroll);
    
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, [])

    const handleDisplay = ()=>{
         !show? setToShow(!show): setToShow( !show)  ;
    }

    return (
        <div className="header" ref={header}>
            <div className="logo">
                Techboydk
            </div>
            <div className="mobile-menu">
                <div className="menu-btn btn" onClick={handleDisplay}>
                    <span></span><span></span><span></span>
                </div>
                <div className={show?"menu-container active":"menu-container"} >
                    <div className="close-btn btn" onClick={handleDisplay}>
                        <span></span><span></span>
                    </div>
                    <div className="menu-items">
                        <div className="item">Home</div>
                        <div className="item">Services</div>
                        <div className="item">Portfolio</div>
                        <div className="item">contact</div>
                        <div className="item">resume</div>
                        <div className="item">My Skill</div>
                    </div>
                    <div className="header-btn btn"><span>Hire Me</span></div>

                </div>
            </div>
            <div className="menu-items">
                <div className="item">Home</div>
                <div className="item">Services</div>
                <div className="item">Portfolio</div>
                <div className="item">contact</div>
                <div className="item">resume</div>
                <div className="item">My Skill</div>
            </div>
            <div className="header-btn btn"><span>Hire Me</span></div>
        </div>
    )
}

export default Header
