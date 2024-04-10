import "../Login/login.scss";
import secondImage from "../../../assets/Decoration.png";

function Login(){
    return (
        <div className="login">
            <h2>Skontaktuj się z nami</h2>
            <img src={secondImage} alt="Decoration" className="login_decoration_image" />
            <form className="login_form">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Hasło"
                />
                <button type="button" className="register_button">Załóż konto</button>
                <button type="submit" className="login_button">Zaloguj się</button>
            </form>
        </div>
    )
}

export default Login;