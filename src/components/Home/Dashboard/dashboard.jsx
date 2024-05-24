import "./dashboard.scss";
import Contact from "../../common/Contact/contact";
import Form from "../../Home/Form/form";
import bannerImage from "../../../assets/component.png";
import secondImage from"../../../assets/Decoration.png";

function Dashboard() {
  return (
    <>
    <div className="dashboard" id="dashboard">
      <img src={bannerImage} alt="Banner image" className="banner_image" />
      <div className="banner_intro">
        <h2>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
        <img src={secondImage} alt="Decoration image" className="banner_decoration_image"/>
        <p>Wystarczą 4 proste kroki:</p>
        
        <div className="four_steps">
        <div className="first_step">
          <h3>1</h3>
          <p>Wybierz rzeczy</p>
        </div>
        <div className="second_step">
          <h3>2</h3>
          <p>Spakuj je w worki</p>
        </div>
        <div className="third_step">
          <h3>3</h3>
          <p>Wybierz fundację</p>
        </div>
        <div className="fourth_step">
          <h3>4</h3>
          <p>Zamów kuriera</p>
        </div>
        </div>
      </div>
    </div>
    <Form />
    <Contact />
    </>
  );
}

export default Dashboard;