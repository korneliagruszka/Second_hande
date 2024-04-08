import { useState } from "react";
import "../Contact/contact.scss";
import secondImage from "../../../assets/Decoration.png";
import facebookImage from "../../../assets/Facebook.png";
import instagramImage from "../../../assets/Instagram.png";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [placeholder, setPlaceholder] = useState({
    firstName: "Wpisz swoje imię",
    email: "Wpisz swój email",
    message: "Wpisz swoją wiadomość",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.firstName.trim() || formData.firstName.indexOf(' ') >= 0) {
      errors.firstName = "Podane imię jest nieprawidłowe!";
      formIsValid = false;
    }

    if (!validateEmail(formData.email)) {
      errors.email = "Podany email jest nieprawidłowy!";
      formIsValid = false;
    }

    if (formData.message.length < 120) {
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Tutaj logika wysyłania formularza, jeśli walidacja przebiegła pomyślnie
      console.log("Formularz wysłany.");
    }
  };

  

  const handleFocus = (field) => {
    const placeholders = {
      firstName: "Krzysztof",
      email: "abc@xyz.pl",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
    setPlaceholder((prevState) => ({
      ...prevState,
      [field]: placeholders[field],
    }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setPlaceholder((prevState) => ({
        ...prevState,
        [field]: `Wpisz swoje ${
          field === "firstName"
            ? "imię"
            : field === "email"
            ? "email"
            : "wiadomość"
        }`,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="contact" id="contact">
      <h2>Skontaktuj się z nami</h2>
      <img src={secondImage} alt="Decoration" className="contact_decoration_image" />
      <form className="contact_form" onSubmit={handleFormSubmit}>
      <div className="input_row_group">
        <div className="input-row">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={placeholder.firstName}
            onFocus={() => handleFocus("firstName")}
            onBlur={() => handleBlur("firstName")}
            value={formData.firstName}
            onChange={handleInputChange}
          />{errors.firstName && <p className="name_error">{errors.firstName}</p>}
          </div>
          <div className="input-row">
          <input
            type="email"
            id="email"
            name="email"
            placeholder={placeholder.email}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            value={formData.email}
            onChange={handleInputChange}
          />{errors.email && <p className="surname_error">{errors.email}</p>}
        </div>
        </div>
        <div className="input-row">
          <textarea
            id="message"
            name="message"
            placeholder={placeholder.message}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur("message")}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>{errors.message && <p className="text_error">{errors.message}</p>}
        </div>
          <button type="submit" className="submit_button">
            Wyślij
          </button>
      </form>
      <footer>
        <p className="copyright">Copyright by Coders Lab</p>
        <img src={facebookImage} alt="facebook image" className="facebook_image" />
        <img src={instagramImage} alt="instagram image" className="instagram_image" />
      </footer>
    </div>
  );
}

export default Contact;