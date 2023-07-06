/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import testimonials from "../testimonials";

const Testimonials = () => {
  const [data] = useState(testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [_screenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, data]);

  return (
    <div className="testimonials-section-content section-content">
      <div className="testimonials-header">
        <h1>Testimonials & Transformations</h1>
        <h3>Check out what our previous clients have achieved</h3>
      </div>
      <div className="testimonials-slider">
        {data.map((testimonial, testimonialIndex) => {
          const { id, name, quote, img } = testimonial;
          let position = "slide";
          if (testimonialIndex === currentIndex) {
            position = "activeTestimonial";
          }
          if (
            testimonialIndex === currentIndex + 1 ||
            (currentIndex == data.length - 1 && testimonialIndex == 0)
          ) {
            position = "nextTestimonial";
          }
          if (
            testimonialIndex === currentIndex + 2 ||
            (currentIndex == data.length - 1 && testimonialIndex == 1)
          ) {
            position = "nextNextTestimonial";
          }
          if (
            testimonialIndex === currentIndex - 1 ||
            (currentIndex == 0 && testimonialIndex == data.length - 1)
          ) {
            position = "lastTestimonial";
          }

          return (
            <div className={`testimonial ${position}`} key={id}>
              <div
                className="testimonial-img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              {/* <img src={img} alt={name} className="testimonial-img" /> */}
              <p className="testimonial-quote">{quote}</p>
              <p className="testimonial-name">{name}</p>
            </div>
          );
        })}
      </div>
      <div className="testimonials-navigation">
        <button onClick={() => setCurrentIndex(currentIndex - 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="80"
            viewBox="0 0 25 50"
            fill="none"
            className="arrow back"
          >
            <path
              d="M18.7505 43.75C17.9509 43.75 17.1509 43.4448 16.5415 42.8345L0.916503 27.2095C-0.304199 25.9888 -0.304199 24.0112 0.916503 22.7905L16.5415 7.16553C17.7622 5.94482 19.7397 5.94482 20.9604 7.16553C22.1811 8.38623 22.1811 10.3638 20.9604 11.5845L7.54443 25L20.9624 38.418C22.1831 39.6387 22.1831 41.6162 20.9624 42.8369C20.352 43.4473 19.5513 43.75 18.7505 43.75Z"
              fill="#FBF6F6"
            />
          </svg>
        </button>
        {data.map((_testimonial, index) => {
          let state = "";

          if (index === currentIndex) {
            state = "active";
          }
          if (
            index === currentIndex + 1 ||
            (currentIndex == data.length - 1 && index == 0)
          ) {
            state = "active";
          }
          return (
            <div className={`dot-indicator ${state}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="none" className={state} />
              </svg>
            </div>
          );
        })}

        <button onClick={() => setCurrentIndex(currentIndex + 1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="80"
            viewBox="0 0 12 24"
            className="arrow forward"
          >
            <g clip-path="url(#clip0_246_182)">
              <path d="M2.99977 21C2.61595 21 2.23195 20.8535 1.93945 20.5606C1.35352 19.9746 1.35352 19.0254 1.93945 18.4395L8.38101 12L1.93945 5.55939C1.35352 4.97345 1.35352 4.02423 1.93945 3.43829C2.52539 2.85236 3.47461 2.85236 4.06055 3.43829L11.5605 10.9383C12.1465 11.5242 12.1465 12.4734 11.5605 13.0594L4.06055 20.5594C3.76758 20.8547 3.38367 21 2.99977 21Z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
