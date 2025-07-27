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
              src="https://media.istockphoto.com/id/1401150816/photo/two-glasses-of-lemonade-with-mint-and-lemons.jpg?s=612x612&w=0&k=20&c=LuuInHwGO11q3aBbAmyMy4JvZ3njV4R0IRE10klTLew="
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
              src="https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630655901598-IBAJQBY8CFPVOFEWC3ZU/shutterstock_375288685.png"
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
              src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg"
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
