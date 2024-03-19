import { useNavigate } from "react-router-dom";
import "../SimpleSteps/simpleSteps.scss";
import secondImage from "../../../assets/Decoration.png";
import icon1Image from "../../../assets/Icon_1.png";
import icon2Image from "../../../assets/Icon_2.png";
import icon3Image from "../../../assets/Icon_3.png";
import icon4Image from "../../../assets/Icon_4.png";

function SimpleSteps() {
  let navigate = useNavigate();

    const handleDonateClick = () => {
        navigate("/login"); 
    };

  return (
    <div className="simple_steps" id="simple_steps">
      <h2>Wystarczą 4 proste kroki</h2>
      <img
        src={secondImage}
        alt="Decoration image"
        className="simple_steps_image"
      />
      <div className="four_columns">
        <div className="first_icon">
          <img src={icon1Image} alt="icon1_image" className="icon1_image" />
          <h4>Wybierz rzeczy</h4>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="second_icon">
          <img src={icon2Image} alt="icon2_image" className="icon2_image" />
          <h4>Spakuj je</h4>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="third_icon">
          <img src={icon3Image} alt="icon3_image" className="icon3_image" />
          <h4>Zdecyduj komu chcesz pomóc</h4>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="fourth_icon">
          <img src={icon4Image} alt="icon4_image" className="icon4_image" />
          <h4>Zamów kuriera</h4>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <button onClick={handleDonateClick} className="simple_button">ODDAJ RZECZY</button>
    </div>
  );
}

export default SimpleSteps;
