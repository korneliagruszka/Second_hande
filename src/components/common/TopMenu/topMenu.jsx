// //import { Link } from "react-router-dom";
import "../TopMenu/topMenu.scss";

function TopMenu() {
    return (
        <div className="top_menu">
            <div className="account_contact_container">
                <a href="" className="login_link">Zaloguj</a>
                <a href="" className="account_link">Załóż konto</a>
            </div>
            <nav className="navigation">
                <a href="">Start</a>
                <a href="">O co chodzi?</a>
                <a href="">O nas</a>
                <a href="">Fundacja i organizacje</a>
                <a href="" className="contact_link">Kontakt</a>
            </nav>
        </div>
    );
}

export default TopMenu;