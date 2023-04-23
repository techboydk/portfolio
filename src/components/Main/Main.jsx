import React, { useEffect, useState } from "react";
import About from "./About/About";
import Home from "./Home/Home";
import "./main.scss";
import Resume from "./Resume/Resume";
import Skill from "./Skill/Skill";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import { HashLink } from "react-router-hash-link";

const Main = () => {
  const [showScrollTopBtn, setToShowScrollTopBtn]= useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > Number(window.innerHeight)) {
        setToShowScrollTopBtn(true);
      } else {
        setToShowScrollTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScrollTopBtn]);

  return (
    <div className="main">
      <div className="bglines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="section-container">
        <Home />
        <About />
        <Skill />
        <Resume />
        <Works />
        <Contact />
      </div>
      <HashLink smooth to='#home' className={showScrollTopBtn ? "scroll_top active" : "scroll_top"}>
        <i className="fa-solid fa-angle-up"></i>
      </HashLink>
    </div>
  );
};

export default Main;
