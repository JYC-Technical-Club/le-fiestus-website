import './About.css';
import image from '../assets/ALF.jpeg';
import brush from './images/brush.png';


function About() {
    return (
        <div>

            <div className="about">
                <div className="heading-about">
                    <div className="heading-about-text-about">About LF</div>
                    <div className="paint-image-about">
                        <img src={brush} alt="" />
                    </div>
                </div>

                <div className="container-about-page">
                    <div className="about-image-lf">
                        <img src={image} alt="" />
                    </div>

                    <div className="text-about">
                        <div className="text-about-box">Le Fiestus is the annual cultural festival of Jaypee University of Information Technology, organized by the JUIT Youth Club spread across a span of 3 days. It is a rich amalgamation of various events touching diverse horizons like literary, performing arts, and various shows from Bollywood sensations to Indie Stars. Le-Fiestus has also played host to concerts like Sunburn and The Local Train in the previous years. <br/></div>
                    </div>
                </div>

            </div>
        </div>

    )
}



export default About