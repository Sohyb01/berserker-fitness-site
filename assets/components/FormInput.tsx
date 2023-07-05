import { useState } from "react";

const FormInput = (props: {
  placeholder: string;
  inputName: string;
  inputId: string;
  inputType: string;
  formTest: RegExp;
  errorMessage: string;
}) => {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const validateForm = () => {
    console.log(props.formTest.test(inputValue));
    if (props.formTest.test(inputValue) == false) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="input-and-error-container">
      <input
        className={`sign-up-input ${error ? "error-state" : ""}`}
        placeholder={props.placeholder}
        type={props.inputType}
        id={props.inputName}
        name={props.inputId}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => validateForm()}
      ></input>
      {error && <div className="input-error-message">{props.errorMessage}</div>}
    </div>
  );
};

export default FormInput;
