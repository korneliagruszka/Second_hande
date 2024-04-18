import "../Logout/logout.scss";
import secondImage from "../../../assets/Decoration.png";

function Logout(){
    return (
        <div className="logout">
            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
            <img src={secondImage} alt="Decoration" className="login_decoration_image" />
            <button type="button" className="logout_button">Strona główna</button>
        </div>
    )
}

export default Logout;