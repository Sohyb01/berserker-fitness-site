import React, { useEffect, useState } from "react";

const FormInput = ({
  placeholder,
  inputName,
  inputId,
  inputType,
  formTest,
  errorMessage,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const validateForm = () => {
    console.log(formTest.test(inputValue));
    if (formTest.test(inputValue) == false) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="input-and-error-container">
      <input
        className={`sign-up-input ${error ? "error-state" : ""}`}
        placeholder={placeholder}
        type={inputType}
        id={inputName}
        name={inputId}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onBlur={() => validateForm()}
      ></input>
      {error && <div className="input-error-message">{errorMessage}</div>}
    </div>
  );
};

export default FormInput;
