import "./Slideshow.css";
import { useState } from "react";
import Slider from "react-slick";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

// import { Link } from "react-router-dom";


import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const images = [image1,image2,image3,image1,image2,image3,];

function Slideshow() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    autoplay:true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive:[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  };

  return (
    <>
      <div className='container-teams' id="team-murious">
        
        <div className="SlideshowTeam">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
        {/* <Link className="whole-team">Whole Team</Link> */}
      </div>
    </>
  );
}

export default Slideshow;