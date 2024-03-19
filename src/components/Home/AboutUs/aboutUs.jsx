import "../AboutUs/aboutUs.scss";
import secondImage from "../../../assets/Decoration.png";
import signatureImage from "../../../assets/Signature.png";
import peopleImage from "../../../assets/People.png";

function AboutUs(){
    return(
    <div className="about_us">
     <div className="about_us_info">
      <h2>O nas</h2>
      <img src={secondImage} alt="Decoration image" className="about_us_image"/>
      <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
      <img src={signatureImage} alt="Signature image" className="signature_image"/></div>
      <img src={peopleImage} alt="People image" className="people_image"/>
    </div>
    )
}

export default AboutUs;