import React, { useState, useRef } from "react";
import { useCartDispatch, useCartState } from "./ContextReducer";

const useCardCart = () => {
  let dispatch = useCartDispatch();
  let data = useCartState();
  const priceRef = useRef(); // Avoid potential initial undefined value

  const handleAddToCart = async (foodItem, finalPrice, qty, size, props) => {
    let food = [];
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;
        break;
      }
    }
    console.log(food);
    console.log(new Date());

    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
        return;
      } else {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size });
  };

  return { handleAddToCart, priceRef };
};

const Card = (props) => {
  const { handleAddToCart } = useCardCart();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]); // Initialize size with the first available option

  const totalPrice = qty * (parseInt(options[size]) || 0); // Calculate total price based on selected size and quantity

  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
          <img
            className="card-img-top"
            src={props.foodItem.img}
            alt="Card image cap"
            style={{ height: "200px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100"></div>

            <div className="d-flex">
              <select
                className="m-2 h-100 bg-dark rounded"
                value={qty}
                onChange={(e) => setQty(parseInt(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                className="m-2 h-100 bg-dark rounded"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-2">
              <div className="h-1 fs-5">rs{totalPrice}/-</div>

              <button
                className={"btn btn-success ms-2 custom-button"}
                style={{ fontSize: "14px", padding: "5px 10px" }}
                onClick={() => handleAddToCart(props.foodItem, totalPrice, qty, size, props)} // Pass totalPrice instead of qty as price
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
