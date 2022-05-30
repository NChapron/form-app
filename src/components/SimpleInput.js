import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onChangeNameHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameIsTouched(true);
  };

  const onChangeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredEmailIsTouched(true);
  };

  const onBlurNameHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const onBlurEmailHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onChangeNameHandler}
          onBlur={onBlurNameHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must include an @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
