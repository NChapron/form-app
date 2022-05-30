import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    console.log(enteredName);
  };

  const nameInputClasses = isValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={onChangeHandler} />
        {!isValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
