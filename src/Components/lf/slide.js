import "./slide.css";
import { useState } from "react";
import Slider1 from "react-slick";
import pic1 from '../assets/gallery/gallery (1).jpeg'
import pic2 from '../assets/gallery/gallery (2).jpeg'
import pic3 from '../assets/gallery/gallery (3).jpeg'
import pic4 from '../assets/gallery/gallery (4).jpeg'
import pic5 from '../assets/gallery/gallery (5).jpeg'
import pic6 from '../assets/gallery/gallery (6).jpeg'
import pic7 from '../assets/gallery/gallery (7).jpeg'
import pic8 from '../assets/gallery/gallery (8).jpeg'
import pic9 from '../assets/gallery/gallery (9).jpeg'
import pic10 from '../assets/gallery/gallery (10).jpeg'
import pic11 from '../assets/gallery/gallery (11).jpeg'
import pic12 from '../assets/gallery/gallery (12).jpeg'
import brush from "../Events/Events/images/brush.png"
// import { Link } from "react-router-dom";


import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const images = [pic1, pic2, pic3,pic4, pic5, pic6, pic7, pic8,pic9, pic10, pic11, pic12];

function Slide() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrowPG next" onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrowPG prev" onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settingPG = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    autoplay:true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive:[
      {
        breakpoint: 500,
        settingPG: {
          slidesToShow: 1,
          
        }
      }
    ]
    
  };

  return (
    <>
      <div className='containerPG' id="team-murious1">
        <div className="TTT1">
        <div className="heading1">
                    <div className="heading-text1">Photo Gallery</div>
                    <div className="paint-image1">
                        <img src={brush} id='schedulebrush' alt="" />
                    </div>
                </div>
        </div>
        <div className="SlideshowTeam1">
          <Slider1 {...settingPG}>
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

export default Slide;