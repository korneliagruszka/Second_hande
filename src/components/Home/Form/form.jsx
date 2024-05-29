import "./form.scss";

function Form() {
    return (
      <div className="form" id="form">
        <p>Krok 1/4</p>
        <h4>Zaznacz co chcesz oddać:</h4>
        <p>ubrania, które nadają się do ponownego użycia</p>
        <p>ubrania, do wyrzucenia</p>
        <p>zabawki</p>
        <p>książki</p>
        <p>Inne</p>
        <button>Dalej</button>
        
      </div>
    );
  }
  
  export default Form;