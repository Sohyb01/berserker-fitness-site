// This page is dedicated to the design system, buttons, icons, svgs, etc used and their different states.
import "../../src/designsystem.css";
import "../../src/reset.css";
import BerserkerButton from "./BerserkerButton.tsx";
import InformationForm from "./InformationForm.tsx";
import FancyLink from "./FancyLink.tsx";
import Services from "./Services.tsx";
import Testimonials from "./Testimonials.tsx";
import Navbar from "./Navbar.tsx";

function DesignSystem() {
  return (
    <>
      <div className="design-system-container-all">
        {/* ---------- Buttons here---------- */}
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
        {/* ---------- Links for navbar---------- */}
        <div className="component-container-2">
          <a className="link" href="#">
            Link
          </a>
          <FancyLink></FancyLink>
        </div>
        {/* Sign up and Log in form */}
        <div className="component-container">
          <InformationForm></InformationForm>
        </div>
        {/* Mobile Navigation */}
        <div className="component-container">
          <div className="mobile-navbar">
            <BerserkerButton scheme="w-b"></BerserkerButton>
            <BerserkerButton scheme="w-b"></BerserkerButton>
            <BerserkerButton scheme="w-b"></BerserkerButton>
            <BerserkerButton scheme="lr-w"></BerserkerButton>
          </div>
        </div>

        {/* Normal Navigation */}
        <div className="component-container">
          <Navbar></Navbar>
        </div>

        {/* Services Section */}
        <div className="component-container">
          <div className="services-section">
            <Services></Services>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="component-container">
          <Testimonials></Testimonials>
        </div>
      </div>
    </>
  );
}

export default DesignSystem;
