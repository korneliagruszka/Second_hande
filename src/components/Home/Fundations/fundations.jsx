import { useState } from "react";
import "./fundations.scss";
import secondImage from "../../../assets/Decoration.png";

function Fundations() {
  const [activeOption, setActiveOption] = useState("fundations");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fundations = [
    {
      name: "Fundacja “Dbam o Zdrowie”",
      mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
      needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
      name: "Fundacja “Dla dzieci”",
      mission: "Pomoc dzieciom z ubogich rodzin.",
      needs: "ubrania, meble, zabawki",
    },
    {
      name: "Fundacja “Bez domu”",
      mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
      needs: "ubrania, jedzenie, ciepłe koce",
    },
    {
      name: "Fundacja “Znajdź pomoc”",
      mission:
        "Donec iaculis maximus ante vitae vehicula. Nunc porttitor, velit in mollis varius, arcu velit fermentum nisi, id sagittis tellus lorem sit amet ante.",
      needs: "rutrum, ultricies, porta",
    },
    {
      name: "Fundacja “Gwiazdeczka”",
      mission:
        "Donec sed laoreet mauris. Phasellus metus libero, lobortis pretium ipsum sit amet, consectetur condimentum felis.",
      needs: "pellentesque, euismod, eu pharetra",
    },
    {
      name: "Fundacja “Zdążyć z pomocą”",
      mission:
        "Quisque in velit at sapien tincidunt dapibus. Aenean vitae dignissim diam.",
      needs: "sed, laoreet",
    },
    {
      name: "Fundacja “Człowiek w potrzebie”",
      mission: "Morbi mi nunc, auctor a feugiat ac, interdum sed quam.",
      needs: "nibh mi, interdum, nulla, suscipit",
    },
  ];

  const organizations = [
    {
      name: "Organizacja “Lorem Ipsum 1”",
      description:
        "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      needs: "Egestas, sed, tempus",
    },
    {
      name: "Organizacja “Lorem Ipsum 2”",
      description:
        "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      needs: "Ut, aliquam, purus, sit, amet",
    },
    {
      name: "Organizacja “Lorem Ipsum 3”",
      description: "Scelerisque in dictum non consectetur a erat nam.",
      needs: "Mi, quis, hendrerit, dolor",
    },
    {
      name: "Organizacja “Lorem Ipsum 4”",
      description:
        "In pretium, tortor ut mollis ultricies, metus dolor fermentum justo.",
      needs: "Sed, ut, elit, molestie",
    },
    {
      name: "Organizacja “Lorem Ipsum 5”",
      description:
        "Nam tincidunt nunc at convallis gravida. Vestibulum ante ipsum.",
      needs: "Fusce, sit, amet, hendrerit, libero",
    },
  ];

  const collections = [
    {
      name: "Zbiórka “Lorem Ipsum 1”",
      mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
      needs: "Egestas, sed, tempus",
    },
    {
      name: "Zbiórka “Lorem Ipsum 2”",
      mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
      needs: "Ut, aliquam, purus, sit, amet",
    },
    {
      name: "Zbiórka “Lorem Ipsum 3”",
      mission: "Scelerisque in dictum non consectetur a erat nam.",
      needs: "Mi, quis, hendrerit, dolor",
    },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setCurrentPage(1);
  };

  const getPaginatedData = () => {
    let data;
    if (activeOption === "fundations") {
      data = fundations;
    } else if (activeOption === "organizations") {
      data = organizations;
    } else {
      data = collections;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  };

  const renderContent = () => {
    const currentItems = getPaginatedData();
  
    let paragraphText;
    if (activeOption === "fundations") {
      paragraphText = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    } else if (activeOption === "organizations") {
      paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
    } else {
      paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    }
  
    return (
      <div>
        <p className={`${activeOption}_text`}>
          {paragraphText}
        </p>
        <div className="three_rows">
          {currentItems.map((item, index) => (
            <div key={index} className={`row${index + 1}_row`}>
              <div className="left_column">
                <p className="row_title">{item.name}</p>
                <p>{item.description || item.mission}</p>
              </div>
              <div className="right_column">
                <p>{item.needs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  let totalItems;
  if (activeOption === "fundations") {
    totalItems = fundations.length;
  } else if (activeOption === "organizations") {
    totalItems = organizations.length;
  } else {
    totalItems = collections.length;
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fundations" id="fundations">
      <h2>Komu pomagamy?</h2>
      <img
        src={secondImage}
        alt="Decoration image"
        className="fundations_image"
      />
      <div className="fundations_buttons">
        <button
          onClick={() => handleOptionClick("fundations")}
          className="fundations_button"
        >
          Fundacjom
        </button>
        <button
          onClick={() => handleOptionClick("organizations")}
          className="organizations_button"
        >
          Organizacjom
        </button>
        <button
          onClick={() => handleOptionClick("collections")}
          className="collections_button"
        >
          Lokalnym zbiórką
        </button>
      </div>
      <div className="content">{renderContent()}</div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => setCurrentPage(number)}
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Fundations;