import { useNavigate } from "react-router-dom";
import "../HomeHeader/homeHeader.scss";
import firstImage from "../../../assets/HeroImage.png";
import secondImage from"../../../assets/Decoration.png";

function HomeHeader() {
    let navigate = useNavigate();

    const handleDonateClick = () => {
        navigate("/login"); 
    };

    const handleOrganizeClick = () => {
        navigate("/login"); 
    };

    return (
        <div className="home_header">
            <img src={firstImage} alt="Hero image" className="hero_image" />
            <div className="intro">
            <p>
                <span>Zacznij pomagać!</span> 
                <span>Oddaj niechciane rzeczy w zaufane ręce</span>
            </p>
            <img src={secondImage} alt="Decoration image" className="decoration_image"/>
            
            </div>
            <div className="intro_buttons">
            <button onClick={handleDonateClick}>ODDAJ RZECZY</button>
            <button onClick={handleOrganizeClick}>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        </div>
    )
}

export default HomeHeader;