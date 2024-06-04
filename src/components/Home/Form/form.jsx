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
                    <select>
                        <option value="" disabled selected>-- wybierz --</option>
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
        </div>
    );
}

export default Form;