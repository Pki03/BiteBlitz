import React, { useRef, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartState, useCartDispatch } from '../components/ContextReducer';
import './Cart.css';

const Cart = () => {
  const cartData = useCartState();
  const dispatch = useCartDispatch();
  const priceRef = useRef();

  // Total price calculation
  const totalPrice = cartData.reduce((total, food) => {
    const foodPrice = parseFloat(food.price);
    return isNaN(foodPrice) ? total : total + foodPrice;
  }, 0).toFixed(2);

  useEffect(() => {
    if (priceRef.current) priceRef.current.innerText = totalPrice;
  }, [totalPrice]);

  if (cartData.length === 0) {
    return (
      <div className='cart-container m-5 w-60 text-center text-danger fs-5'>
        The Cart is Empty!
      </div>
    );
  }

  // Dynamically set backend URL
  const API_BASE = window.location.hostname.includes("vercel.app")
    ? "https://biteblitz.onrender.com" // Render backend URL
    : "http://localhost:5001";

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckOut = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      alert("Please log in first!");
      window.location.href = "/login"; // redirect to login
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/razorpay/createOrder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(parseFloat(totalPrice) * 100) }) 
      });

      const data = await res.json();
      if (!data.success) {
        alert("Failed to create order. Try again.");
        return;
      }

      const options = {
        key: 'rzp_test_j7sIjjRln5bP50',
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'BiteBlitz',
        description: 'Food Order Payment',
        order_id: data.order.id,
        handler: async function (response) {
          alert("Payment successful! ID: " + response.razorpay_payment_id);

          const saveOrder = await fetch(`${API_BASE}/api/orderData`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              order_data: cartData,
              email: userEmail,
              order_date: new Date().toDateString(),
            }),
          });

          if (saveOrder.status === 200) {
            dispatch({ type: 'DROP' });
          } else {
            alert("Order saving failed after payment.");
          }
        },
        prefill: { email: userEmail, contact: "9999999999" },
        theme: { color: "#0d6efd" },
        modal: { ondismiss: () => alert("Payment popup closed.") }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Checkout failed");
    }
  };

  return (
    <div className='cart-container container m-auto mt-5 table-responsive'>
      <table className='table table-hover'>
        <thead className='text-success fs-4'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Size</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((food, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>₹{food.price}</td>
              <td>
                <button type='button' className='btn p-0'>
                  <DeleteIcon className='delete-icon' onClick={() => dispatch({ type: 'REMOVE', index })} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='total-price-container'>
        <h1 className='total-price'>Total Price:₹<span ref={priceRef}></span>/-</h1>
      </div>
      <div className='checkout-button-container'>
        <button className='btn checkout-button' onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
