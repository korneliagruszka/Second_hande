import "../TopMenu/topMenu.scss";
import { Link } from 'react-scroll';

function Navigation(){
    return(
        <nav className="navigation">
        <Link to="/" smooth={true} duration={500}>
          Start
        </Link>
        <Link to="simple_steps" smooth={true} duration={500}>
          O co chodzi?
        </Link>
        <Link to="about_us" smooth={true} duration={500}>
          O nas
        </Link>
        <Link to="fundations" smooth={true} duration={500}>
          Fundacja i organizacje
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="contact_link"
        >
          Kontakt
        </Link>
      </nav>
    )
}

export default Navigation;