import { Link } from "react-router-dom";
import "../TopMenu/topMenu.scss";
import Navigation from "./navigation";

function TopMenu() {
  return (
    <div className="top_menu">
      <div className="account_contact_container">
        <Link to="/login" className="login_link">
          Zaloguj
        </Link>
        <Link to="/register" className="account_link">
          Załóż konto
        </Link>
      </div>
      <Navigation />
    </div>
  );
}

export default TopMenu;