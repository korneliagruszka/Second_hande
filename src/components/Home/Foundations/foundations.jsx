import { useState } from "react";
import "../Foundations/foundations.scss";
import secondImage from "../../../assets/Decoration.png";

function Foundations() {
  const [activeOption, setActiveOption] = useState("fundations");

  const handleFoundationsClick = () => setActiveOption("fundations");
  const handleOrganizationsClick = () => setActiveOption("organizations");
  const handleCollectionsClick = () => setActiveOption("collections");

  const renderContent = () => {
    switch (activeOption) {
      case "fundations":
        return (
          <div>
            <p className="foundations_text">
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
              którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
              pomagają i czego potrzebują.
            </p>
            <div className="three_rows">
              <div className="first_row">
                <div className="left_column">
                  <p className="row_title">Fundacja “Dbam o Zdrowie”</p>
                  <p>
                    Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                    życiowej.
                  </p>
                </div>
                <div className="right_column">
                  <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
              </div>
              <div className="second_row">
                <div className="left_column">
                  <p className="row_title">Fundacja “Dla dzieci”</p>
                  <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                </div>
                <div className="right_column">
                  <p>ubrania, meble, zabawki</p>
                </div>
              </div>
              <div className="third_row">
                <div className="left_column">
                  <p className="row_title">Fundacja “Bez domu”</p>
                  <p>
                    Cel i misja: Pomoc dla osób nie posiadających miejsca
                    zamieszkania.
                  </p>
                </div>
                <div className="right_column">
                  <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "organizations":
        return (
          <div>
            <p className="organizations_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="three_rows">
              <div className="first_row">
                <div className="left_column">
                  <p className="row_title">Organizacja “Lorem Ipsum 1”</p>
                  <p>
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar.
                  </p>
                </div>
                <div className="right_column">
                  <p>Egestas, sed, tempus</p>
                </div>
              </div>
              <div className="second_row">
                <div className="left_column">
                  <p className="row_title">Organizacja “Lorem Ipsum 2”</p>
                  <p>
                    Hendrerit gravida rutrum quisque non tellus orci ac auctor
                    augue.
                  </p>
                </div>
                <div className="right_column">
                  <p>Ut, aliquam, purus, sit, amet</p>
                </div>
              </div>
              <div className="third_row">
                <div className="left_column">
                  <p className="row_title">Organizacja “Lorem Ipsum 3”</p>
                  <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <div className="right_column">
                  <p>Mi, quis, hendrerit, dolor</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "collections":
        return (
          <div>
            <p className="collections_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="three_rows">
              <div className="first_row">
                <div className="left_column">
                  <p className="row_title">Zbiórka “Lorem Ipsum 1”</p>
                  <p>
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar.
                  </p>
                </div>
                <div className="right_column">
                  <p>Egestas, sed, tempus</p>
                </div>
              </div>
              <div className="second_row">
                <div className="left_column">
                  <p className="row_title">Zbiórka “Lorem Ipsum 2”</p>
                  <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                </div>
                <div className="right_column">
                  <p>Ut, aliquam, purus, sit, amet</p>
                </div>
              </div>
              <div className="third_row">
                <div className="left_column">
                  <p className="row_title">Zbiórka “Lorem Ipsum 3”</p>
                  <p>Scelerisque in dictum non consectetur a erat nam.</p>
                </div>
                <div className="right_column">
                  <p>Mi, quis, hendrerit, dolor</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="foundations" id="foundations">
      <h2>Komu pomagamy?</h2>
      <img src={secondImage} alt="Decoration image" className="foundations_image"/>
      <div className="foundations_buttons">
        <button onClick={handleFoundationsClick} className="foundations_button1">Fundacjom</button>
        <button onClick={handleOrganizationsClick} className="foundations_button2">Organizacjom pozarządowym</button>
        <button onClick={handleCollectionsClick} className="foundations_button3">Lokalnym zbiórkom</button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default Foundations;