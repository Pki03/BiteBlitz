import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            return; // User email not found in local storage
        }

        try {
            const res = await fetch("http://localhost:5001/api/auth/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userEmail
                })
            });
            const response = await res.json();
            setOrderData(response.orderData.order_data);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className='container'>
                {orderData.map((order, index) => (
                    <div key={index} style={{ color: 'purple' }}>
                        {/* Display your order data here */}
                        {order}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
