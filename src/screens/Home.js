import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Card"; // Import the Card component
import "./home.css"; // Import the CSS file

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5001/api/foodData", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      response = await response.json();
      // Update state with the fetched data
      setFoodItems(response[0]);
      setFoodCategory(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Use an empty dependency array to run the effect only once

  return (
    <div>
      <NavBar />

      <div>
        <Carousel />
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption">
              <div className="d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              {/* <img className="d-block w-100" src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" /> */}
            </div>
            {/* Other carousel items */}
          </div>
          {/* Carousel controls */}
        </div>
      </div>

      <div className="container m-4 rounded cen">
        {foodCategory.length !== 0 ? (
          <div className="row mb-3">
            {foodCategory.map((data) => (
              <div key={data._id} className="col-12">
                <div className="fs-5 m-3">
                  <strong>{data.CategoryName}</strong>
                  <hr />
                  <div className="row">
                    {foodItems.length !== 0 ? (
                      foodItems
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                        )
                        .map((filteredItem) => (
                          <div
                            key={filteredItem._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodItem={filteredItem}
                              options={
                                filteredItem.options &&
                                filteredItem.options.length > 0
                                  ? filteredItem.options[0]
                                  : null
                              }
                            />
                          </div>
                        ))
                    ) : (
                      <div>No such data found</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <Footer />
    </div>
  );
}
