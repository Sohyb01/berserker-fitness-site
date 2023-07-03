import BerserkerButton from "../assets/components/BerserkerButton";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-all">
        <section className="section--hero section">
          <div className="hero-section-content">
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
        <section className="section--about section">
          <div className="about-section-content">
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
            <article className="about-sections-buttons-area">
              <h1>So why wait?</h1>
              <div className="about-section-buttons-container">
                <BerserkerButton
                  scheme="lr-w"
                  arrow="true"
                  shadow="white-shadow"
                  content="JOIN NOW"
                ></BerserkerButton>
                <p>or</p>
                <BerserkerButton
                  scheme="b-w"
                  arrow="true"
                  shadow="white-shadow"
                  content="Learn more"
                ></BerserkerButton>
              </div>
            </article>
          </div>
        </section>
        <section className="section-- section"></section>
      </div>
    </>
  );
}

export default App;
