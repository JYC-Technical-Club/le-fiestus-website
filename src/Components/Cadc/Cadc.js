import './Cadc.css';
import image from '../assets/CDAC1.jpeg';
import brush from './images/brush.png';
import TopImage from './images/top-design.png'


function Cadc() {
    return (
            <div className="cadc">

                <div className="top-design"><img src={TopImage} alt="" /></div>
                <div className="heading-cadc">
                    <div className="heading-text-cadc">Cultural and Dance Club</div>
                    <div className="paint-brush-image">
                        <img src={brush} alt="" />
                    </div>
                </div>

                <div className="container-rightside">
                    <div className="text-cadc">
                        <div className="text-cadc-box-cadc">From promoting vibrant experiences through events and organizing activities that involve dance, music and creativity. CULTURAL AND DANCE CLUB of JUIT is a mix and match of everything.This club aims at developing the creativity of the students by providing and managing a multitude of themes and decorations throughout the campus during the fests. The club also manages all the independent dance societies in the university.Cultural and Dance Club is the glamour and limelight of JUIT. It is like a family which basically teaches you all the management skills and allows you to explore your creativity and thus delivering the best of all events.</div>
                    </div>
                    <div className="cadc-image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
    )
}



export default Cadc