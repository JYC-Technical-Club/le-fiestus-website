import amar_ujala from "./amar_ujala.png";
import Bullseye from "./Bullseye.png";
import ekacare from "./ekacare.svg";
import Interview_buddy from "./Interview_buddy.png";
import jungle from "./jungle.png";
import logo5 from "./logo5.webp";
import Momo_Magic_Cafe from "./Momo_Magic_Cafe.png";
import Noticebard from "./Noticebard.png";
import Organic from "./Organic.png";
import Origin from "./Origin.jpg";
import Picsart from "./Picsart.svg";
import stream_yard from "./stream_yard.svg";
import The_Local_Spell from "./The_Local_Spell.png";
import virtual_reality_cafe from "./virtual_reality_cafe.jpg";
import unstop from "./unstop.jpg";
import React from "react";
import "./Sponsors.css";
import brush3 from "./brush3.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer/Footer";

function Sponsors() {
  return (
    <div>
      <Navbar />
      <div className="sponsors">
        <div className="heading">
          <div className="osponsors">Our Sponsors</div>
          <img src={brush3} className="brush3" alt="xoxo" />
        </div>
        <div className="all-logos">
          <img src={Bullseye} className="Bullseye" alt="xoxo" />
          <img src={jungle} className="jungle" alt="xoxo" />
          <img src={ekacare} className="ekacare" alt="xoxo" />
          <img src={Momo_Magic_Cafe} className="Momo_Magic_Cafe" alt="xoxo" />
          <img src={Noticebard} className="Noticebard" alt="xoxo" />
          <img src={Organic} className="Organic" alt="xoxo" />
          <img src={Picsart} className="Picsart" alt="xoxo" />
          <img src={The_Local_Spell} className="The_Local_Spell" alt="xoxo" />
          <img src={Interview_buddy} className="Interview_buddy" alt="xoxo" />
          <img src={stream_yard} className="stream_yard" alt="xoxo" />
          <img
            src={virtual_reality_cafe}
            className="virtual_reality_cafe"
            alt="xoxo"
          />
          <img src={logo5} className="logo5" alt="xoxo" />
          <img src={amar_ujala} className="amar_ujala" alt="xoxo" />
          <img src={Origin} className="Origin" alt="xoxo" />
          <img src={unstop} className="unstop" alt="xoxo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
