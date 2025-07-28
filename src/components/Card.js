import React, { useState, useRef } from "react";
import { useCartDispatch, useCartState } from "./ContextReducer";
import './Card.css'; // Import the CSS file for styling

const useCardCart = () => {
  let dispatch = useCartDispatch();
  let data = useCartState();
  const priceRef = useRef();

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
  const [size, setSize] = useState(priceOptions[0]);

  const totalPrice = qty * (parseInt(options[size]) || 0);

  return (
    <div className="card custom-card">
      <img
        className="card-img-top custom-card-img"
        src={props.foodItem.img}
        alt="Card image cap"
      />
      <div className="card-body custom-card-body">
        <h5 className="card-title custom-card-title">{props.foodItem.name}</h5>
        <div className="container w-100"></div>

        <div className="d-flex">
          <select
            className="m-2 h-100 bg-dark rounded custom-select"
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
            className="m-2 h-100 bg-dark rounded custom-select"
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
          <div className="h-1 fs-5 custom-price">₹{totalPrice}/-</div>

          <button
            className="btn btn-success ms-2 custom-button"
            onClick={() => handleAddToCart(props.foodItem, totalPrice, qty, size, props)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
