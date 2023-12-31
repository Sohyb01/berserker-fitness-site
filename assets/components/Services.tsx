/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import services from "../services";

const Services = () => {
  const [data] = useState(services);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth] = useState(window.innerWidth);

  //   To make sure we stay within the index of the number of services
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, data]);
  // Automatic Sliding
  //   useEffect(() => {
  //     const slider = setInterval(() => {
  //       setCurrentIndex(currentIndex + 1);
  //     }, 3000);
  //     return () => {
  //       clearInterval(slider);
  //     };
  //   }, [currentIndex]);
  return (
    <div className="services-section-content section-content">
      <div className="services-header">
        <h1>Our Services</h1>
        <h3>What we give you to help you succeed!</h3>
      </div>
      <div className="services-container">
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
        <div className="services-slider">
          {data.map((service, serviceIndex) => {
            const { id, name, description, img } = service;
            let position = "slide";
            if (serviceIndex === currentIndex) {
              position = "activeSlide";
            }
            if (
              serviceIndex === currentIndex + 1 ||
              (currentIndex == data.length - 1 && serviceIndex == 0)
            ) {
              position = "nextSlide";
            }
            if (
              serviceIndex === currentIndex + 2 ||
              (currentIndex == data.length - 2 && serviceIndex == 0) ||
              (currentIndex == data.length - 1 && serviceIndex == 1)
            ) {
              position = "nextNextSlide";
            }
            if (
              serviceIndex === currentIndex - 1 ||
              (currentIndex === 0 && serviceIndex === data.length - 1)
            ) {
              position = "lastSlide";
            }
            if (
              serviceIndex === currentIndex - 2 ||
              (currentIndex === 0 && serviceIndex === data.length - 2) ||
              (currentIndex === 1 && serviceIndex === data.length - 1)
            ) {
              position = "lastLastSlide";
            }

            return screenWidth >= 992 ? (
              <div className={`service ${position}`} key={id}>
                <div
                  className="service-img"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="service-name">{name}</div>
                <div className="service-description">{description}</div>
              </div>
            ) : (
              <div className={`service`} key={id}>
                <div className="service-img"></div>
                <div
                  className="service-img"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="service-name">{name}</div>
                <div className="service-description">{description}</div>
              </div>
            );
          })}
        </div>
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

export default Services;
