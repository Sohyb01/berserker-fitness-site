// This page is dedicated to the design system, buttons, icons, svgs, etc used and their different states.
import "../../src/designsystem.css";
import "../../src/reset.css";
import BerserkerButton from "./BerserkerButton.tsx";
import InformationForm from "./InformationForm.tsx";
import FancyLink from "./FancyLink.tsx";
import FormInput from "./FormInput.tsx";
import PasswordInputs from "./PasswordInputs.tsx";

function DesignSystem() {
  return (
    <>
      <div className="design-system-container-all">
        <div className="component-container-1">
          <BerserkerButton scheme="w-b"></BerserkerButton>
          <BerserkerButton scheme="w-b" arrow="true"></BerserkerButton>
          <BerserkerButton scheme="w-b" shadow="white-shadow"></BerserkerButton>
          <BerserkerButton
            scheme="w-b"
            shadow="white-shadow"
            arrow="true"
          ></BerserkerButton>
          <BerserkerButton scheme="b-w"></BerserkerButton>
          <BerserkerButton scheme="b-w" arrow="true"></BerserkerButton>
          <BerserkerButton scheme="b-w" shadow="white-shadow"></BerserkerButton>
          <BerserkerButton
            scheme="b-w"
            shadow="white-shadow"
            arrow="true"
          ></BerserkerButton>
          <BerserkerButton scheme="lr-w"></BerserkerButton>
          <BerserkerButton scheme="lr-w" arrow="true"></BerserkerButton>
          <BerserkerButton
            scheme="lr-w"
            shadow="white-shadow"
          ></BerserkerButton>
          <BerserkerButton
            scheme="lr-w"
            shadow="white-shadow"
            arrow="true"
          ></BerserkerButton>
          <BerserkerButton scheme="g-w"></BerserkerButton>
          <BerserkerButton scheme="g-w" arrow="true"></BerserkerButton>
          <BerserkerButton scheme="g-w" shadow="white-shadow"></BerserkerButton>
          <BerserkerButton
            scheme="g-w"
            shadow="white-shadow"
            arrow="true"
          ></BerserkerButton>
        </div>
        <div className="component-container-2">
          <a className="link" href="#">
            Link
          </a>
          <FancyLink></FancyLink>
        </div>
        <div className="component-container">
          <InformationForm></InformationForm>
        </div>
        <BerserkerButton scheme="lr-w"></BerserkerButton>
        <div className="component-container">
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
        </div>{" "}
        <div className="component-container">
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
        </div>{" "}
        <div className="component-container">
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
        </div>
        <div className="component-container">
          <PasswordInputs
            errorMessage="Error! Passwords must match"
            formTest={/^[a-zA-Z0-9 !@#$%^&*()\-_=+{}[\]|;:'",.<>/?`~]*$/}
          ></PasswordInputs>
        </div>
      </div>
    </>
  );
}

export default DesignSystem;
