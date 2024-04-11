import "../Login/login.scss";
import secondImage from "../../../assets/Decoration.png";

function Login(){
    return (
        <div className="login">
            <h2>Zaloguj się</h2>
            <img src={secondImage} alt="Decoration" className="login_decoration_image" />
            <form className="login_form">
              <div className="form_inputs">
                <label htmlFor="email">Email</label>
                <input className="email"
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
                </div>
            </form>
            <div className="form_buttons">
                <button type="button" className="register_button">Załóż konto</button>
                <button type="submit" className="login_button">Zaloguj się</button>
                </div>
        </div>
    )
}

export default Login;