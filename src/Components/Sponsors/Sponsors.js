import React from "react";
import "./Sponsors.css";
import dominos from "./dominos.png";
import kfc from "./kfc.png";
import bb from "./bb.png";
import mtv from "./mtv.png";
import dabur from "./dabur.png";
import accenture from "./accenture.png";
import airtel from "./airtel.png";
import br from "./br.png";
import bsnl from "./bsnl.png";
import ccd from "./ccd.png";
import cocacola from "./cocacola.png";
import ebay from "./ebay.png";
import freecharge from "./freecharge.png";
import harley from "./harley.png";
import hyundai from "./hyundai.png";
import lakme from "./lakme.png";
import lipton from "./lipton.png";
import md from "./md.png";
import nescafe from "./nescafe.png";
import nestle from "./nestle.png";
import pepsi from "./pepsi.png";
import pizzahut from "./pizzahut.png";
import pnb from "./pnb.png";
import qw from "./qw.png";
import royalenfield from "./royalenfield.png";
import time3 from "./time3.png";
import vivo from "./vivo.png";
import wrangler from "./wrangler.svg";
import brush3 from "./brush3.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer/Footer";

function Sponsors() {
  return (
    <div>
        <Navbar/>
      <div className="sponsors">
        <div className="heading">
          <div className="osponsors">Our Sponsors</div>
          <img src={brush3} className="brush3" alt="xoxo" />
        </div>
        <div className="all-logos">
          <div className="row1">
            <img src={pnb} className="pnb" alt="xoxo" />
            <img src={kfc} className="kfc" alt="xoxo" />
            <img src={pizzahut} className="pizzahut" alt="xoxo" />
            <img src={mtv} className="mtv" alt="xoxo" />
            <img src={dabur} className="dabur" alt="xoxo" />
          </div>
          <div className="row2">
            <img src={airtel} className="airtel" alt="xoxo" />
            <img src={br} className="br" alt="xoxo" />
            <img src={bsnl} className="bsnl" alt="xoxo" />
            <img src={ccd} className="ccd" alt="xoxo" />
            <img src={cocacola} className="cocacola" alt="xoxo" />
          </div>
          <div className="row3">
            <img src={ebay} className="ebay" alt="xoxo" />
            <img src={freecharge} className="freecharge" alt="xoxo" />
            <img src={harley} className="harley" alt="xoxo" />
            <img src={hyundai} className="hyundai" alt="xoxo" />
            <img src={nescafe} className="nescafe" alt="xoxo" />
          </div>
          <div className="row4">
            <img src={lipton} className="lipton" alt="xoxo" />
            <img src={md} className="md" alt="xoxo" />
            <img src={bb} className="bb" alt="xoxo" />
            <img src={pepsi} className="pepsi" alt="xoxo" />
            <img src={accenture} className="accenture" alt="xoxo" />
          </div>
          <div className="row5">
            <img src={nestle} className="nestle" alt="xoxo" />
            <img src={time3} className="time3" alt="xoxo" />
            <img src={royalenfield} className="royalenfield" alt="xoxo" />
            <img src={vivo} className="vivo" alt="xoxo" />
          </div>
          <div className="row6">
            <img src={dominos} className="dominos" alt="xoxo" />
            <img src={qw} className="qw" alt="xoxo" />
            <img src={wrangler} className="wrangler" alt="xoxo" />
            <img src={lakme} className="lakme" alt="xoxo" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Sponsors;
