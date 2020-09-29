import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/img/carousal/slide1.webp";
import slide2 from "../../assets/img/carousal/slide2.webp";
import slide3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../../components/scrolldown/scrollDown.component";

import "./mycarousal.style.css";
const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={2200}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
