import BerserkerButton from "./BerserkerButton.tsx";

const LoginForm = () => {
  return (
    <form className="sign-up-form">
      <div className="sign-up-inputs-container">
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
          id="suffix"
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
