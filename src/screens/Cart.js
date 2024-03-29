import React, { useRef, useEffect } from 'react';
import Delete from '@material-ui/icons/Delete';
import { useCartState, useCartDispatch } from '../components/ContextReducer';

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
            <div className='m-5 w-100 text-center text-danger fs-5'>
                The Cart is Empty!
            </div>
        );
    }

    const handleCheckOut = async () => {
        try {
            console.log('Handling checkout...');
            const userEmail = localStorage.getItem('userEmail');
            console.log('User email:', userEmail);
    
            if (!userEmail) {
                console.error('User email is missing.');
                return;
            }
    
            const response = await fetch('http://localhost:5000/api/orderData', { // <-- Update the URL here
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
        <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    {/* ... */}
                </thead>
                <tbody>
                    {cartData.map((food, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            {/* <td>
                                <span ref={priceRef}>{parseFloat(food.price).toFixed(2)}</span>
                            </td> */}
                            <td>
                                <button type='button' className='btn p-0'>
                                    <Delete onClick={() => dispatch({ type: 'REMOVE', index })} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h1 className='fs-2 text-color-white'>Total Price: <span ref={priceRef}></span>/-</h1>
            </div>
            <div>
                <button className='btn bg-success mt-3' onClick={handleCheckOut}>
                    Check Out
                </button>
            </div>
        </div>
    );
};

export default Cart;
