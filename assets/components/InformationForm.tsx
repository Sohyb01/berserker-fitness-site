import FormSelection from "./FormSelection";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useState } from "react";

const InformationForm = () => {
  const [selection, setSelection] = useState("Log In");
  const handleSelection = (mode: string) => {
    setSelection(mode);
  };

  return (
    <div>
      <div className="sign-up-form-container">
        <FormSelection
          selection={selection}
          handleSelection={handleSelection}
        ></FormSelection>
        {(selection == "Log In" && <LoginForm></LoginForm>) ||
          (selection == "Sign Up" && <SignupForm></SignupForm>)}
      </div>
    </div>
  );
};

export default InformationForm;
