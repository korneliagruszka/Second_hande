import "./form.scss";

function Form() {
    return (
        <div className="form" id="form">
            <p>Krok 1/4</p>
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
            <button>Dalej</button>
        </div>
    );
}

export default Form;