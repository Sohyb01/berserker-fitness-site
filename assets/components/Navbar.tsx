import BerserkerButton from "./BerserkerButton";

const Navbar = () => {
  return (
    <nav className="navbar section-content">
      <a href="#" className="navbar-logo"></a>
      <div className="navbar-links">
        <a className="link" href="#about">
          Why work with us?
        </a>
        <a className="link" href="#services">
          Services
        </a>
        <a className="link" href="#testimonials">
          Testimonials
        </a>
        <a className="link signup-button" href="#join">
          <BerserkerButton
            scheme="lr-w"
            shadow="white-shadow"
            content="Start Today!"
          ></BerserkerButton>
        </a>
      </div>
      <a href="" className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            d="M0 1.66667C0 0.746354 0.767679 0 1.71429 0H22.2857C23.2339 0 24 0.746354 24 1.66667C24 2.58854 23.2339 3.33333 22.2857 3.33333H1.71429C0.767679 3.33333 0 2.58854 0 1.66667ZM0 10C0 9.07812 0.767679 8.33333 1.71429 8.33333H22.2857C23.2339 8.33333 24 9.07812 24 10C24 10.9219 23.2339 11.6667 22.2857 11.6667H1.71429C0.767679 11.6667 0 10.9219 0 10ZM22.2857 20H1.71429C0.767679 20 0 19.2552 0 18.3333C0 17.4115 0.767679 16.6667 1.71429 16.6667H22.2857C23.2339 16.6667 24 17.4115 24 18.3333C24 19.2552 23.2339 20 22.2857 20Z"
            fill="#FBF6F6"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;
