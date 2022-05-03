import './Clubs.css';

import PakkePahadiye from '../assets/PP.jpeg';
import UBC from '../assets/UBC.jpeg';
import RT from '../assets/Rythm.jpeg';
import FS from '../assets/FSociety.jpeg';
import DNR from '../assets/DNR.jpeg';
import AC from '../assets/Apocalypse.jpeg';


function Clubs() {
    return (


        <div className="clubs-page">

            <div className="container-club-image-left">
                <div className="left-side-club-1">
                    <div className="club-number">01</div>
                    <div className="clubs-image-side">
                        <img src={UBC} alt="Club01" />
                    </div>
                    <div className="club-name">UBC</div>
                </div>
                <div className="text-clubs">
                    <div className="text-clubs-box">United Bhangra Crew, the Punjabi Folk Society of JUIT preserves the traditional qualities of the Bhangra dance, its rhythmic music and robust drum beats, the vigorous and exuberant movements and the vibrant colours of the dresses and makes presentations that charm and keep the audience enthralled. <br /></div>
                </div>
            </div>

            <div className="container-club-image-right">
                <div className="text-clubs">
                    <div className="text-clubs-box">Pakke pahadiye, the Himachali Folk Society of JUIT generally have stories which are narrated through songs and dance in groups to the tunes of the various local instruments and local dialects.<br /></div>
                </div>
                <div className="left-side-club-1">
                    <div className="club-number">02</div>
                    <div className="clubs-image-side">
                        <img src={PakkePahadiye} alt="Club02" />
                    </div>
                    <div id='PP' className="club-name">Pakke Pahadiye</div>
                </div>
            </div>
            <div className="container-club-image-left">
                <div className="left-side-club-1">
                    <div className="club-number">03</div>
                    <div className="clubs-image-side">
                        <img src={DNR} alt="Club03" />
                    </div>
                    <div id='DNR' className="club-name">DNR - Dance N Rule</div>
                </div>
                <div className="text-clubs">
                    <div className="text-clubs-box">The purpose of the Dance Club is to learn dance styles from different cultural backgrounds. This club not only focuses on dances but also helping students to become involved in order to increase student engagement.<br /></div>
                </div>
            </div>

            <div className="container-club-image-right">
                <div className="text-clubs">
                    <div className="text-clubs-box">The objective of the club is to elevate and advance the art of the dance. The club was established with the mission of bringing out the hidden talents of students and also provides them a stage where they can showcase their dancing talent and interest.<br /></div>
                </div>
                <div className="left-side-club-1">
                    <div className="club-number">04</div>
                    <div className="clubs-image-side">
                        <img src={RT} alt="Club04" />
                    </div>
                    <div className="club-name">Rythm Twisters</div>
                </div>
            </div>
            <div className="container-club-image-left">
                <div className="left-side-club-1">
                    <div className="club-number">05</div>
                    <div className="clubs-image-side">
                        <img src={AC} alt="Club05" />
                    </div>
                    <div className="club-name">Apocalypse</div>
                </div>
                <div className="text-clubs">
                    <div className="text-clubs-box">From showing best dance moves to dressing up in the best attires, a chance to showcase talent with Bollywood tadka is provided by the Athkheliya club.<br /></div>
                </div>
            </div>

            <div className="container-club-image-right">
                <div className="text-clubs">
                    <div className="text-clubs-box">This dance club is to boost up the morale of students and to highlight the talent of dance and creativity. It provides opportunities to dance lovers to prove their talent and it is a good platform for them to have their artistic exploration. This club plays an important role in maintaining the positive environment in the university.<br /></div>
                </div>
                <div className="left-side-club-1">
                    <div className="club-number">06</div>
                    <div className="clubs-image-side">
                        <img src={FS} alt="Club06" />
                    </div>
                    <div className="club-name">F-Society</div>
                </div>
            </div>

        </div>
    )
}



export default Clubs