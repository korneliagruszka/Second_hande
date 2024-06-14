import { useState } from "react";
import "./form.scss";

function Form() {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
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
                    <h5>Adres odbioru:
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
                    </h5></div>
                    <div className="date_section">
                    <h5>Termin odbioru:
                        <p>Data
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                        <p>Godzina
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                        <p>Uwagi dla kuriera
                        <input className="date_input" type="text" id="date" name="date"/>
                        </p>
                    </h5>
                    </div>
                    </div>
                    <div className="step4_buttons">
                        <button onClick={handleBack}>Wstecz</button>
                        <button onClick={handleNext}>Dalej</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Form;