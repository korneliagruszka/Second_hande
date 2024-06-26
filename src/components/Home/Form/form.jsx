import { useState } from "react";
import "./form.scss";
import icon1Image from "../../../assets/Icon_1.png";
import icon4Image from "../../../assets/Icon_4.png";
import secondImage from"../../../assets/Decoration.png";

function Form() {
    const [step, setStep] = useState(1);

    //stan dla przechowywania danych formularza
    const [formData, setFormData] = useState({
        items: [],
        bags: "",
        location: "",
        beneficiaries: [],
        organization: "",
        address: {
            street: "",
            city: "",
            postalCode: "",
            phone: ""
        },
        pickup: {
            date: "",
            time: "",
            notes: ""
        }
    });

    const handleNext = () => {
        // setStep(step + 1);
        if (step === 5) {
            setStep(6);
        } else {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        // setStep(step - 1);
        if (step > 1) { 
            setStep(step - 1);
        }
    };

    //funkcja do obsługi zmian w formularzu
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === "checkbox") {
            if (checked) {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: [...prevState[name], value]
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: prevState[name].filter(item => item !== value)
                }));
            }
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    //funkcja do obsługi zmian adresu
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            address: {
                ...prevState.address,
                [name]: value
            }
        }));
    };

    //funkcja do obsługi zmian terminu odbioru
    const handlePickupChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            pickup: {
                ...prevState.pickup,
                [name]: value
            }
        }));
    };

    return (
        <div className="form" id="form">
            {step < 6 && (
                <div className="form_header">
            {step < 5 ? (
                <p>Krok {step}/4</p>
            ) : (
                <h2 className="summary_title">Podsumowanie Twojej darowizny</h2>
                )}
                </div>
            )}
            {step === 1 && (
                <>
                    <h4>Zaznacz co chcesz oddać:</h4>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="ubrania w dobrym stanie" onChange={handleChange}/>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="ubrania do wyrzucenia" onChange={handleChange}/>
                            ubrania, do wyrzucenia
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="zabawki" onChange={handleChange}/>
                            zabawki
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="książki" onChange={handleChange}/>
                            książki
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="inne" onChange={handleChange}/>
                            Inne
                        </label>
                    </div>
                    <button onClick={handleNext}>Dalej</button>
                </>
            )}
            {step === 2 && (
                <>
                    <h4>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h4>
                    <p className="selector">Liczba 60l worków:
                    <select className="select_custom" name="bags" onChange={handleChange}>
                        <option value="" disabled selected hidden>- wybierz -</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </p>
                    <div className="buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Dalej</button>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <h4>Lokalizacja:</h4>
                    <select className="location_custom" name="location" onChange={handleChange}>
                        <option value="" disabled selected hidden>- wybierz -</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                    <p>Komu chcesz pomóc?</p>
                    <div className="checkbox_container">
                        <label className="step3_checkbox">
                            <input type="checkbox" name="beneficiaries" value="Dzieciom" data-text="Dzieciom" onChange={handleChange}/>
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" name="beneficiaries" value="Samotnym Matkom" data-text="Samotnym matkom" onChange={handleChange}/>
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" name="beneficiaries" value="Bezdomnym" data-text="Bezdomnym" onChange={handleChange}/>
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" name="beneficiaries" value="Niepełnosprawnym" data-text="Niepełnosprawnym" onChange={handleChange}/>
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" name="beneficiaries" value="Osobom Starszym" data-text="Osobom starszym" onChange={handleChange}/>
                        </label>
                    </div>
                    <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                    <input className="organization_input" type="text" id="organization" name="organization" onChange={handleChange}/>
                    <div className="step3_buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Dalej</button>
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                <div className="adres_container">
                    <div className="adres_section">
                    <h5>Adres odbioru:</h5>
                        <p>Ulica
                        <input className="adres_input" type="text" id="street" name="street" onChange={handleAddressChange}/>
                        </p>
                        <p>Miasto
                        <input className="adres_input" type="text" id="city" name="city" onChange={handleAddressChange}/>
                        </p>
                        <p>Kod pocztowy
                        <input className="adres_input" type="text" id="postalCode" name="postalCode" onChange={handleAddressChange}/>
                        </p>
                        <p>Numer telefonu
                        <input className="adres_input" type="text" id="phone" name="phone" onChange={handleAddressChange}/>
                        </p>
                    </div>
                    <div className="date_section">
                    <h5>Termin odbioru:</h5>
                        <p>Data
                        <input className="date_input" type="text" id="date" name="date" onChange={handlePickupChange}/>
                        </p>
                        <p>Godzina
                        <input className="date_input" type="text" id="time" name="time" onChange={handlePickupChange}/>
                        </p>
                        <p>Uwagi dla kuriera
                        <input className="date_input" type="text" id="notes" name="notes" onChange={handlePickupChange}/>
                        </p>
                    </div>
                    </div>
                    <div className="step4_buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Dalej</button>
                    </div>
                </>
            )}
            {step === 5 && ( 
                <>
                    <div className="summary">
                            <h5 className="summary_subtitle">Oddajesz:</h5>
                        <div className="summary_item">
                            <img src={icon1Image} alt="icon1" className="icon1" />
                            <p className="summary_text">{formData.bags} worki, {formData.items.join(", ")}, {formData.beneficiaries.join(", ")}</p>
                        </div>
                        <div className="location">
                            <img src={icon4Image} alt="icon4" className="icon4" />
                            <h6>dla lokalizacji: {formData.location}</h6>
                        </div>
                        <div className="pickup_info">
                            <div>
                                <h5 className="info_title">Adres odbioru:</h5>
                                <p>Ulica {formData.address.street}</p>
                                <p>Miasto {formData.address.city}</p>
                                <p>Kod pocztowy {formData.address.postalCode}</p>
                                <p>Numer telefonu {formData.address.phone}</p>
                            </div>
                            <div>
                                <h5 className="info_title">Termin odbioru:</h5>
                                <p>Data {formData.pickup.date}</p>
                                <p>Godzina {formData.pickup.time}</p>
                                <p>Uwagi dla kuriera {formData.pickup.notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary_buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Potwierdzam</button>
                    </div>
                </>
            )}
            {step === 6 && (   
                <div className="final_text">
                    <p>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</p> 
                    <img src={secondImage} alt="Decoration image" className="final_decoration_image"/>
                </div>  
            )}  
        </div>
    );
}

export default Form;