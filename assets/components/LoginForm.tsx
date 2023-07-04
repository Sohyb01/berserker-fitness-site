import BerserkerButton from "./BerserkerButton.tsx";
import FormInput from "./FormInput.tsx";

const LoginForm = () => {
  return (
    <form className="sign-up-form">
      <div className="sign-up-inputs-container">
        <FormInput
          placeholder="E-mail"
          inputName="e-mail"
          inputId="e-mail"
          inputType="text"
          formTest={
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
          } /*The Regular Expression used to test the input field, for form validation */
          errorMessage=""
        ></FormInput>

        {/* <label htmlFor="suffix">Suffix:</label> */}
        <FormInput
          placeholder="Password"
          inputName="password"
          inputId="password"
          inputType="password"
          formTest={
            /^[a-zA-Z0-9 !@#$%^&*()\-_=+{}[\]|;:'",.<>/?`~]*$/
          } /*The Regular Expression used to test the input field, for form validation */
          errorMessage="Error! Incorrect email or password"
        ></FormInput>
      </div>
      <BerserkerButton
        type="submit"
        scheme="lr-w"
        content="Log In"
      ></BerserkerButton>
    </form>
  );
};

export default LoginForm;
