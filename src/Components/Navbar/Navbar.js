import React, { useState } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

import {animateScroll as scroll} from 'react-scroll';
import { Link as LNK } from "react-scroll";

//Icon
import Hamburger from "hamburger-react";
import lflogo from "./Pattern/LF64px.png";
import JYC from "./Pattern/jyc.png" 

function Navbar() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [isOpen, setOpen] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="Navbar">
      <div className={header ? "header active" : "header"}>
        <div className="Navbar-Logo">
          <Link 
          onClick={() => scroll.scrollToTop()} 
          className='nav-links' 
          id="rnd-logo-scroll"
          activeClassName='active' 
          to="/" >
            <img id="LF" src={lflogo} alt="lf"></img>
          </Link>
        </div>
        <div className="Click-Menu">
          <section className="Click-Icon" onClick={handleClick}>
            <Hamburger toggled={click} toggle={setClick} />
          </section>
          <section className="Click-Text"> Menu</section>
        </div>
        <div className="JYC-Logo">
          <img src={JYC} alt={JYC} className="jyclogo"/>
        </div>
      </div>
      <div className={click ? "Nav-Container_active" : "Nav-Container"}>
        <ul className={click ? "Nav-Items_active" : "Nav-Items"}>
          <li className="Nav-Link">
            <LNK
              to="about"
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              About
            </LNK>
          </li>
          <li className="Nav-Link">
            <LNK
              to="cadc"
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Cultural & Dance Club
            </LNK>
          </li>
          <li className="Nav-Link">
            <LNK
              to="gallery2"
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Photogallery
            </LNK>
          </li>
          <li className="Nav-Link">
            <LNK
              to="container-teams1"
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Schedule
            </LNK>
          </li>
          <li className="Nav-Link">
            <LNK
              to="clubs-page"
              className="nav-links"
              activeClassName="active"
              onClick={handleClick}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              Clubs
            </LNK>
          </li>
          <li className="Nav-Link">
            <Link to="/sponsors" className="sponsors-link-to-page">
              Our Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
