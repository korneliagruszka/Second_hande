//import { Link } from "react-router-dom";
import "../HomeHeader/homeHeader.scss";
import firstImage from "../../../assets/HeroImage.png";
import secondImage from"../../../assets/Decoration.png";

function HomeHeader() {
    return (
        <div className="home_header">
            <img src={firstImage} alt="Hero image" className="hero_image" />
            <div className="intro">
            <p>
                <span>Zacznij pomagać!</span> 
                <span>Oddaj niechciane rzeczy w zaufane ręce</span>
            </p>
            <img src={secondImage} alt="Decoration image" className="decoration_image"/>
            <button>ODDAJ RZECZY</button>
            <button>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        </div>
    )
}

export default HomeHeader;