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
        </div>
    </div>
    <Form />
    <Contact />
    </>
  );
}

export default Dashboard;