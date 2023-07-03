import React from "react";
import BerserkerButton from "./BerserkerButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-links">
        <a className="link" href="#">
          Why work with us?
        </a>
        <a className="link" href="#">
          Services
        </a>
        <a className="link" href="#">
          Testimonials
        </a>
        <a className="link signup-button" href="#">
          <BerserkerButton
            scheme="lr-w"
            shadow="white-shadow"
            content="Start Today!"
          ></BerserkerButton>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
