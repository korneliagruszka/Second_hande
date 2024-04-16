import "../Register/register.scss";
import secondImage from "../../../assets/Decoration.png";
import { Link } from "react-router-dom";

function Register(){
    return (
        <div className="register">
            <h2>Załóż konto</h2>
            <img src={secondImage} alt="Decoration" className="register_decoration_image" />
            <form className="register_form">
                <div className="register_inputs">
                    <label htmlFor="email">Email</label>
                    <input
                        className="email"
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                    />
                    <label htmlFor="repeatPassword">Powtórz hasło</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                    />
                </div>
                <div className="form_buttons">
                    <Link to="/login">
                    <button type="button" className="register_button">Zaloguj się</button></Link>
                    <button type="submit" className="login_button">Załóż konto</button>
                </div>
            </form>
        </div>
    );
}

export default Register;