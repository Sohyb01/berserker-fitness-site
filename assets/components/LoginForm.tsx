import BerserkerButton from "./BerserkerButton.tsx";

const LoginForm = () => {
  return (
    <form className="sign-up-form">
      <div className="sign-up-inputs-container">
        {/* <label htmlFor="first-name">First Name:</label> */}
        <input
          placeholder="First Name"
          className="sign-up-input-field"
          type="text"
          id="first-name"
          name="first-name"
        ></input>

        {/* <label htmlFor="last-name">Last Name:</label> */}
        <input
          placeholder="Last Name"
          className="sign-up-input-field"
          type="text"
          id="last-name"
          name="last-name"
        ></input>

        {/* <label htmlFor="middle-name">Middle Name:</label> */}
        <input
          placeholder="E-mail"
          className="sign-up-input-field"
          type="text"
          id="middle-name"
          name="middle-name"
        ></input>

        {/* <label htmlFor="suffix">Suffix:</label> */}
        <input
          placeholder="Password"
          className="sign-up-input-field"
          type="password"
          id="password"
          name="suffix"
        ></input>

        {/* <label htmlFor="suffix">Suffix:</label> */}
        <input
          placeholder="Retype Password"
          className="sign-up-input-field"
          type="password"
          id="retypepassword"
          name="suffix"
        ></input>
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
