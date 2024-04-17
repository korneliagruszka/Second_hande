import "../Login/login.scss";
import secondImage from "../../../assets/Decoration.png";
import { useState } from 'react';
import { Link } from "react-router-dom"

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: '', password: '' };

        if (!validateEmail(email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
            valid = false;
        }

        if (password.length < 6) {
            errors.password = 'Podane hasło jest za krótkie!';
            valid = false;
        }

        setErrors(errors);
        if (valid) {
            // W tym miejscu można by przeprowadzić logowanie
            console.log("Logowanie...");
        }
    };

    return (
        <div className="login">
            <h2>Zaloguj się</h2>
            <img src={secondImage} alt="Decoration" className="login_decoration_image" />
            <form className="login_form" onSubmit={handleLogin}>
              <div className="form_inputs">
                <label htmlFor="email">Email</label>
                <input className="email"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                        borderBottom: errors.email ? '2px solid red' : '2px solid #3c3c3c26'
                    }}
                />
                {errors.email && <div className="login_error1">{errors.email}</div>}
                <label htmlFor="password">Hasło</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{
                        borderBottom: errors.password ? '2px solid red' : '2px solid #3c3c3c26'
                    }}
                />
                {errors.password && <div className="login_error2">{errors.password}</div>}
                </div>
            
              <div className="form_buttons">
              <Link to="/register">
                <button type="button" className="register_button">Załóż konto</button></Link>
                <button type="submit" className="login_button">Zaloguj się</button>
              </div>
            </form>
        </div>
    )
}

export default Login;