import React, { useRef, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartState, useCartDispatch } from '../components/ContextReducer';
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
    const cartData = useCartState();
    const dispatch = useCartDispatch();
    const priceRef = useRef();

    useEffect(() => {
        // Update the total price when cartData changes
        const totalPrice = cartData.reduce((total, food) => {
            const foodPrice = parseFloat(food.price);
            return isNaN(foodPrice) ? total : total + foodPrice;
        }, 0).toFixed(2);

        // Check if priceRef.current is truthy before setting innerText
        if (priceRef.current) {
            priceRef.current.innerText = totalPrice;
        }
    }, [cartData]);

    if (cartData.length === 0) {
        return (
            <div className='cart-container m-5 w-60 text-center text-danger fs-5'>
                The Cart is Empty!
            </div>
        );
    }

    const handleCheckOut = async () => {
        try {
            console.log('Handling checkout...');
            alert('Your order has been placed');
            const userEmail = localStorage.getItem('userEmail');
            console.log('User email:', userEmail);

            if (!userEmail) {
                console.error('User email is missing.');
                return;
            }

            const response = await fetch('http://localhost:5001/api/orderData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order_data: cartData,
                    email: userEmail,
                    order_date: new Date().toDateString(),
                }),
            });

            console.log('Response status:', response.status);

            if (response.status === 200) {
                console.log('Checkout successful!');
                dispatch({ type: 'DROP' });
            } else {
                console.error('Checkout failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
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
                            <td>💲{food.price}</td>
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
                <h1 className='total-price'>Total Price:💲<span ref={priceRef}></span>/-</h1>
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
