/* eslint-disable @typescript-eslint/no-explicit-any */
import FancyLink from "./FancyLink";

const FormSelection = (props: any) => {
  return (
    <div className="sign-up-form-selection">
      <FancyLink
        selection={props.selection}
        handleSelection={props.handleSelection}
        content={"Sign Up"}
      ></FancyLink>
      <div className="vertical-barrier"></div>
      <FancyLink
        selection={props.selection}
        handleSelection={props.handleSelection}
        content={"Log In"}
      ></FancyLink>
    </div>
  );
};

export default FormSelection;
