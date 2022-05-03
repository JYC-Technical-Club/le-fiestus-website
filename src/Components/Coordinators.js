import SalilVerma from "./assets/SalilVerma.png"
import KhushiShah from "./assets/KhushiShah.png"
import "./Coordinator.css"
import brush from './Teams/images/Stroke.png'

function Coordinators() {
    return (
        <>
         <div className="heading-cadc">
                    <div className="heading-text-cadc">Coordinators</div>
                    <div className="paint-brush-image">
                        <img src={brush} alt="" />
                    </div>
                </div>
        <div className="Coordinators">
            <div className="division salil">
                <img className="salilimage" src={SalilVerma} />
                <div className="text TextSalil">Salil Verma</div>
            </div>
            <div className="division khushi">
                <img className="khushiimage" src={KhushiShah} />
                <div className="text khushiText">Khushi Shah</div>
                </div>    
        </div>
        </>
    );
}
export default Coordinators;