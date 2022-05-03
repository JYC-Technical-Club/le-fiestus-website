import React from "react";
import "./Footer.css";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import TMP from './Images/TMP_Logo.svg'

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer-Content">
          <div className="Footer-Text">
            <div className="Footer-Details">
              <div className="main-heading-footer">
                <h1 className="Contact-Us">Contact Us</h1>
                <div className="Footer-Line_l1" />
              </div>
              <div className="Footer-Details footertext">
                Jaypee University Of Information Technology Waknaghat, HP -
                173234, India
                <br />
                Phone: +91-7599003687
                <br />
                Email: president.jyc@juitsolan.in
                <br />
                Support : technicalclub.jyc@juitsolan.in
                <br/>

              </div>

              <div className="Footer-Socials">
                <a
                  href="//instagram.com/jyc.technical.club?utm_medium=copy_link"
                  className="Sociallinks"
                >
                  <BsInstagram />
                </a>
                <a href="tel:" className="Sociallinks">
                  <BsFillTelephoneFill />
                </a>
                <a href="mailto:" className="Sociallinks">
                  <FaGoogle />
                </a>
              </div>
            </div>
          </div>

          <div className="Footer-Logo">
            <div className="logo-above-line-footer" />
            <div className="logos-for-footer">
                <img className="TMP_logo" alt="TMP" src={TMP} />
                Managed by Technical Sciences, Movies and Photography Club. 
            </div>
          </div>
        </div>

        <div className="Footer-Copyright">
          Copyright © Le Fiestus JUIT 2022.
          <br /> All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
