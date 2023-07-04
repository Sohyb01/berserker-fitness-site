import BerserkerButton from "../assets/components/BerserkerButton";
import FormInput from "../assets/components/FormInput";
import InformationForm from "../assets/components/InformationForm";
import Navbar from "../assets/components/Navbar";
import Services from "../assets/components/Services";
import Testimonials from "../assets/components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-all">
        <div className="section--navbar section">
          <Navbar></Navbar>
        </div>
        <section className="section--hero section" id="hero">
          <div className="hero-section-content section-content">
            <h1>Achieve the strength and physique of your dreams</h1>
            <p>
              With our team’s expertise and support, you will achieve your goals
              and more.
            </p>
            <div className="hero-section-buttons">
              <BerserkerButton
                scheme="lr-w"
                arrow="true"
                shadow="white-shadow"
                content="BECOME A BERSERKER"
              ></BerserkerButton>
              <BerserkerButton
                scheme="b-w"
                arrow="true"
                shadow="white-shadow"
                content="Learn More"
              ></BerserkerButton>
            </div>
          </div>
        </section>
        <section className="section--about section" id="about">
          <div className="about-section-content section-content">
            <article>
              <h1>About us</h1>
              <p>
                Our team has helped transform thousands of lives for the better.
                With us, you will achieve your fitness goals, gain confidence,
                be happier, and introduce structure into your life through
                external accountability.
              </p>
            </article>
            <div className="about-image"></div>
            <article>
              <h1>Still not sure? Don’t worry!</h1>
              <p>
                We provide a free trial period to help you make a better
                judgement. If you are unsatisfied after actually experiencing
                what it is like. we have a no-questions-asked money back
                guarantee.
              </p>
            </article>
            <article className="about-section-buttons-area">
              <h1>So why wait?</h1>
              <div className="about-section-buttons-container">
                <a href="#join">
                  <BerserkerButton
                    scheme="lr-w"
                    arrow="true"
                    shadow="white-shadow"
                    content="JOIN NOW"
                  ></BerserkerButton>
                </a>
                <p>or</p>
                <a href="#services">
                  <BerserkerButton
                    scheme="b-w"
                    arrow="true"
                    shadow="white-shadow"
                    content="Learn more"
                  ></BerserkerButton>
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className="section--services section" id="services">
          <Services></Services>
        </section>
        <section className="section--newsletter section" id="newsletter">
          <div className="newsletter-section-content section-content">
            <h1>
              Sign up to our newsletter and receive limited offers and
              discounts!
            </h1>
            <div className="newsletter-email-input">
              <p>E-mail</p>
              <FormInput
                placeholder="example@mail.com"
                inputName="e-mail"
                inputId="e-mail"
                inputType="text"
                formTest={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
                errorMessage="Error! Please enter a valid e-mail address format"
              ></FormInput>
            </div>
          </div>
        </section>
        <section className="section--testimonials section" id="testimonials">
          <Testimonials></Testimonials>
        </section>
        <section className="section--join-us section" id="join">
          <div className="join-us-section-content section-content">
            <div>
              <h3>What are you waiting for?</h3>
              <h1>JOIN US TODAY</h1>
            </div>
            <InformationForm></InformationForm>
          </div>
        </section>
        <section className="section--footer section" id="footer">
          <img src="./assets/imgs/footer-wave.svg" alt="" />
          <div className="footer-content section-content">
            <article className="socials-and-number">
              <a href="https://www.facebook.com/profile.php?id=100003393718419">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M35.7162 0.000976562H4.28767C3.15103 0.000976563 2.06094 0.452506 1.25721 1.25623C0.453482 2.05996 0.00195313 3.15005 0.00195312 4.28669L0.00195313 35.7153C0.00195313 36.8519 0.453482 37.942 1.25721 38.7457C2.06094 39.5495 3.15103 40.001 4.28767 40.001H16.5421V26.4019H10.9171V20.001H16.5421V15.1224C16.5421 9.5733 19.8457 6.50812 24.9055 6.50812C27.3287 6.50812 29.8627 6.94026 29.8627 6.94026V12.3867H27.0707C24.3198 12.3867 23.4618 14.0938 23.4618 15.8447V20.001H29.6028L28.6207 26.4019H23.4618V40.001H35.7162C36.8529 40.001 37.943 39.5495 38.7467 38.7457C39.5504 37.942 40.002 36.8519 40.002 35.7153V4.28669C40.002 3.15005 39.5504 2.05996 38.7467 1.25623C37.943 0.452506 36.8529 0.000976563 35.7162 0.000976562Z"
                    fill="#FBF6F6"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/sohyb_imm/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M20.0064 9.74548C14.331 9.74548 9.75321 14.3243 9.75321 20.001C9.75321 25.6776 14.331 30.2565 20.0064 30.2565C25.6818 30.2565 30.2596 25.6776 30.2596 20.001C30.2596 14.3243 25.6818 9.74548 20.0064 9.74548ZM20.0064 26.6684C16.3388 26.6684 13.3405 23.6783 13.3405 20.001C13.3405 16.3236 16.3299 13.3336 20.0064 13.3336C23.6829 13.3336 26.6723 16.3236 26.6723 20.001C26.6723 23.6783 23.674 26.6684 20.0064 26.6684ZM33.0706 9.32598C33.0706 10.6559 31.9997 11.718 30.679 11.718C29.3494 11.718 28.2875 10.647 28.2875 9.32598C28.2875 8.00499 29.3583 6.93392 30.679 6.93392C31.9997 6.93392 33.0706 8.00499 33.0706 9.32598ZM39.8614 11.7537C39.7097 8.54945 38.978 5.71112 36.6311 3.37262C34.2931 1.03411 31.4554 0.302215 28.2518 0.141554C24.9501 -0.0458827 15.0538 -0.0458827 11.7521 0.141554C8.55745 0.293289 5.71974 1.02519 3.37284 3.36369C1.02594 5.70219 0.303124 8.54053 0.1425 11.7448C-0.0448957 15.0473 -0.0448957 24.9457 0.1425 28.2482C0.294201 31.4525 1.02594 34.2908 3.37284 36.6293C5.71974 38.9678 8.54852 39.6997 11.7521 39.8604C15.0538 40.0478 24.9501 40.0478 28.2518 39.8604C31.4554 39.7087 34.2931 38.9768 36.6311 36.6293C38.969 34.2908 39.7008 31.4525 39.8614 28.2482C40.0488 24.9457 40.0488 15.0562 39.8614 11.7537ZM35.5959 31.7917C34.8999 33.5411 33.5524 34.8889 31.7945 35.594C29.162 36.6383 22.9155 36.3973 20.0064 36.3973C17.0973 36.3973 10.8419 36.6293 8.21835 35.594C6.46933 34.8978 5.12186 33.55 4.4169 31.7917C3.37284 29.1586 3.61378 22.9107 3.61378 20.001C3.61378 17.0912 3.38176 10.8344 4.4169 8.21028C5.11294 6.46087 6.4604 5.1131 8.21835 4.40798C10.8508 3.36369 17.0973 3.60468 20.0064 3.60468C22.9155 3.60468 29.1709 3.37262 31.7945 4.40798C33.5435 5.10418 34.891 6.45194 35.5959 8.21028C36.64 10.8433 36.3991 17.0912 36.3991 20.001C36.3991 22.9107 36.64 29.1675 35.5959 31.7917Z"
                    fill="#FBF6F6"
                  />
                </svg>
              </a>
              <a href="https://wa.me/201023717157">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 41"
                  fill="none"
                >
                  <path
                    d="M39.9395 30.2348L38.1231 38.1098C37.8679 39.2231 36.8895 40.002 35.7434 40.002C16.0332 40.0004 0.00195312 23.9692 0.00195312 4.25827C0.00195312 3.11296 0.780781 2.13327 1.89414 1.87936L9.76914 0.0629598C10.916 -0.202821 12.0879 0.392491 12.5645 1.47858L16.1988 9.95514C16.6237 10.9536 16.3371 12.1169 15.4973 12.8028L11.291 16.1801C13.9457 21.5879 18.3426 25.9848 23.752 28.6411L27.1957 24.4379C27.8745 23.5957 29.0465 23.3043 30.0449 23.7368L38.5215 27.3703C39.541 27.9067 40.2051 29.0942 39.9395 30.2348Z"
                    fill="#FBF6F6"
                  />
                </svg>
              </a>
              <a href="https://wa.me/201023717157">
                <p>+2010 2371 7157</p>
              </a>
            </article>
            <article className="footer-links">
              <a className="link" href="#about">
                About Us
              </a>
              <a className="link" href="#services">
                Services
              </a>
              <a className="link" href="#testimonials">
                Testimonials
              </a>
              <a className="link" href="#join">
                Sign Up Today
              </a>
            </article>
            <article className="copyright">
              ©2023 Berserker Fitness <br></br> All Rights Reserved
            </article>
            <article className="sohyb-mansour">
              Design & Code by{" "}
              <a href="https://www.facebook.com/profile.php?id=100003393718419">
                Sohyb Mansour
              </a>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
