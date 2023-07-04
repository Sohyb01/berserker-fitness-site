import React, { useState } from "react";

const PasswordInputs = ({ formTest, errorMessage, ...props }) => {
  const [error, setError] = useState(false);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [retypePasswordValue, setRetypePasswordValue] = useState("");
  const validateForm = () => {
    if (passwordInputValue !== retypePasswordValue) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <div className="input-and-error-container">
      <input
        className={`sign-up-input ${error ? "error-state" : ""}`}
        placeholder="Password"
        type="password"
        id="password"
        name="password"
        value={passwordInputValue}
        onChange={(e) => {
          setPasswordInputValue(e.target.value);
        }}
        onBlur={() => validateForm()}
      ></input>
      {formTest.test(passwordInputValue) == false && (
        <div className="input-error-message">
          {
            "Error! Can only contain English numbers, letters, and commonly used symbols"
          }
        </div>
      )}
      <input
        className={`sign-up-input ${error ? "error-state" : ""}`}
        placeholder="Retype Password"
        type="password"
        id="retype-password"
        name="retype-password"
        value={retypePasswordValue}
        onChange={(e) => {
          setRetypePasswordValue(e.target.value);
        }}
        onBlur={() => validateForm()}
      ></input>
      {error && <div className="input-error-message">{errorMessage}</div>}
    </div>
  );
};

export default PasswordInputs;
