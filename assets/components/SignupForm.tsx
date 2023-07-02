import BerserkerButton from "./BerserkerButton.tsx";
import FormInput from "./FormInput.tsx";
import PasswordInputs from "./PasswordInputs.tsx";

const LoginForm = () => {
  return (
    <form className="sign-up-form">
      <div className="sign-up-inputs-container">
        {/* <label htmlFor="first-name">First Name:</label> */}
        <FormInput
          placeholder="First Name"
          inputName="first-name"
          inputId="first-name"
          inputType="text"
          formTest={
            /^[a-zA-Z]{1,13}$/
          } /*The Regular Expression used to test the input field, for form validation */
          errorMessage="Error! Name can only contain letters and must be 1-14 characters long"
        ></FormInput>

        {/* <label htmlFor="last-name">Last Name:</label> */}
        <FormInput
          placeholder="Last Name"
          inputName="Last-name"
          inputId="last-name"
          inputType="text"
          formTest={
            /^[a-zA-Z]{1,13}$/
          } /*The Regular Expression used to test the input field, for form validation */
          errorMessage="Error! Name can only contain letters and must be 1-14 characters long"
        ></FormInput>

        {/* <label htmlFor="middle-name">Middle Name:</label> */}
        <FormInput
          placeholder="E-mail"
          inputName="e-mail"
          inputId="e-mail"
          inputType="text"
          formTest={
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
          } /*The Regular Expression used to test the input field, for form validation */
          errorMessage="Error! Please enter a valid e-mail address format"
        ></FormInput>

        <PasswordInputs
          errorMessage="Error! Passwords must match"
          formTest={/^[a-zA-Z0-9 !@#$%^&*()\-_=+{}[\]|;:'",.<>/?`~]*$/}
        ></PasswordInputs>
      </div>
      <BerserkerButton
        type="submit"
        scheme="lr-w"
        content="Submit"
      ></BerserkerButton>
    </form>
  );
};

export default LoginForm;
