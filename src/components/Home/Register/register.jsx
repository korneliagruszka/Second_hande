import "../Register/register.scss";
import secondImage from "../../../assets/Decoration.png";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', repeatPassword: ''});

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: '', password: '', repeatPassword: '' };

        if (!validateEmail(email)) {
            errors.email = 'Podany email jest nieprawidłowy!';
            valid = false;
        }

        if (password.length < 6) {
            errors.password = 'Podane hasło jest za krótkie!';
            valid = false;
        }

        if (repeatPassword.length < 6) {
            errors.repeatPassword = '';
            valid = false;
        }

        else if (password !== repeatPassword) {
        errors.repeatPassword = 'Hasła nie są identyczne!';
        valid = false;
        }

        setErrors(errors);
        if (valid) {
            // W tym miejscu można by przeprowadzić logowanie
            console.log("Logowanie...");
        }
    };
    return (
        <div className="register">
            <h2>Załóż konto</h2>
            <img src={secondImage} alt="Decoration" className="register_decoration_image" />
            <form className="register_form" onSubmit={handleLogin}>
                <div className="register_inputs">
                    <label htmlFor="email">Email</label>
                    <input
                        className="email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                        borderBottom: errors.email ? '2px solid red' : '2px solid #3c3c3c26'
                    }}
                    />
                    {errors.email && <div className="register_error1">{errors.email}</div>}
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
                    {errors.password && <div className="register_error2">{errors.password}</div>}
                    <label htmlFor="repeatPassword">Powtórz hasło</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                        style={{
                        borderBottom: errors.password ? '2px solid red' : '2px solid #3c3c3c26'
                    }}
                    />
                    {errors.repeatPassword && <div className="register_error3">{errors.repeatPassword}</div>}
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