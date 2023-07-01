// This page is dedicated to the design system, buttons, icons, svgs, etc used and their different states.
import "../../src/designsystem.css";
import "../../src/reset.css";
import BerserkerButton from "./BerserkerButton.tsx";
import InformationForm from "./InformationForm.tsx";
import FancyLink from "./FancyLink.tsx";

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
        <div className="component-container"></div>
      </div>
    </>
  );
}

export default DesignSystem;
