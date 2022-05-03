import "./Events.css";
import { useState } from "react";
import Slider1 from "react-slick";
import image1 from "./images/day1.jpeg"
import image2 from "./images/day2.jpeg"
import image3 from "./images/day3.jpeg"
import brush from "./images/brush.png"
// import { Link } from "react-router-dom";


import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const images = [image1,image2,image3,image1,image2,image3,];

function Event() {
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
      <div className='container-teams1' id="team-murious1">
        <div className="TTT1">
        <div className="heading1">
                    <div className="heading-text1">Schedule</div>
                    <div className="paint-image1">
                        <img src={brush} id='schedulebrush' alt="" />
                    </div>
                </div>
        </div>
        <div className="SlideshowTeam1">
          <Slider1 {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider1>
        </div>
      </div>
    </>
  );
}

export default Event;