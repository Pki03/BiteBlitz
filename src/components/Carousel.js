import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import '../index.css'; // Import your custom CSS file

export default function MyCarousel() {
  return (
    <div className="carousel-container">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://wallpapercave.com/wp/wp10495609.jpg"
              alt="First slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://wallpapercave.com/wp/wp7289347.jpg"
              alt="Second slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://i.pinimg.com/originals/95/aa/cf/95aacf31e7804adda964d41bb2efab85.jpg"
              alt="Third slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://www.foodguruz.in/wp-content/uploads/2020/05/md3-768x768.jpg"
              alt="Fourth slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://ranacatering.ca/wp-content/uploads/2023/01/Manchurian-Noodles-Combo.jpg"
              alt="Fifth slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-image"
              src="https://www.lifeisforfood.com/wp-content/uploads/2021/12/Pav-Bhaji.jpg"
              alt="Sixth slide"
              style={{ objectFit: "contain", height: "100vh" }}
            />
            <div className="carousel-overlay"></div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
