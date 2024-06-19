import { useState } from "react";
import "./form.scss";

function Form() {
    const [step, setStep] = useState(1);

    // Dodano stan dla przechowywania danych formularza
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
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    // Dodano funkcję do obsługi zmian w formularzu
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

    // Dodano funkcje do obsługi zmian adresu
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

    // Dodano funkcje do obsługi zmian terminu odbioru
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
            <p>Krok {step}/4</p>
            {step === 1 && (
                <>
                    <h4>Zaznacz co chcesz oddać:</h4>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="ubrania_ponowne_użycie" />
                            ubrania, które nadają się do ponownego użycia
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="ubrania_do_wyrzucenia" />
                            ubrania, do wyrzucenia
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="zabawki" />
                            zabawki
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="ksiazki" />
                            książki
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="items" value="inne" />
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
                    <select className="select_custom">
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
                    <select className="location_custom">
                        <option value="" disabled selected hidden>- wybierz -</option>
                        <option value="1">Poznań</option>
                        <option value="2">Warszawa</option>
                        <option value="3">Kraków</option>
                        <option value="4">Wrocław</option>
                        <option value="5">Katowice</option>
                    </select>
                    <p>Komu chcesz pomóc?</p>
                    <div className="checkbox_container">
                        <label className="step3_checkbox">
                            <input type="checkbox" value="dzieciom" data-text="Dzieciom" />
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" value="samotnymMatkom" data-text="Samotnym matkom" />
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" value="bezdomnym" data-text="Bezdomnym" />
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" value="niepelnosprawnym" data-text="Niepełnosprawnym" />
                        </label>
                        <label className="step3_checkbox">
                            <input type="checkbox" value="osobomStarszym" data-text="Osobom starszym" />
                        </label>
                    </div>
                    <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                    <input className="organization_input" type="text" id="organization" name="organization"/>
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
                        <input className="adres_input" type="text" id="adres" name="adres"/>
                        </p>
                        <p>Miasto
                        <input className="adres_input" type="text" id="adres" name="adres"/>
                        </p>
                        <p>Kod pocztowy
                        <input className="adres_input" type="text" id="adres" name="adres"/>
                        </p>
                        <p>Numer telefonu
                        <input className="adres_input" type="text" id="adres" name="adres"/>
                        </p>
                    </div>
                    <div className="date_section">
                    <h5>Termin odbioru:</h5>
                        <p>Data
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                        <p>Godzina
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                        <p>Uwagi dla kuriera
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                    </div>
                    </div>
                    <div className="step4_buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Dalej</button>
                    </div>
                </>
            )}
            {step === 5 && ( /* Dodano krok 5 */
                <>
                    <h2>Podsumowanie Twojej darowizny:</h2> {/* Dodano podsumowanie */}
                    <div className="summary">
                        <div className="summary-item">
                            <img src="path/to/clothes-icon.png" alt="Ubrania ikona" />
                            <p className="summary-text">{formData.bags} worki, {formData.items.join(", ")}, {formData.beneficiaries.join(", ")}</p>
                        </div>
                        <div className="location">
                            <img src="path/to/arrow-icon.png" alt="Strzałki ikona" />
                            <p>dla lokalizacji: {formData.location}</p>
                        </div>
                        <div className="pickup-info">
                            <div>
                                <h5>Adres odbioru:</h5>
                                <p>{formData.address.street}</p>
                                <p>{formData.address.city}</p>
                                <p>{formData.address.postalCode}</p>
                                <p>{formData.address.phone}</p>
                            </div>
                            <div>
                                <h5>Termin odbioru:</h5>
                                <p>{formData.pickup.date}</p>
                                <p>{formData.pickup.time}</p>
                                <p>{formData.pickup.notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button>Potwierdzam</button> {/* Przycisk do potwierdzenia */}
                    </div>
                </>
            )}
        </div>
    );
}

export default Form;