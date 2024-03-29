// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart';
 import NavBar from './components/NavBar';
// import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';  // Corrected import statement
// import 'bootstrap-dark-5/dist/js/bootstrap.bundle';  // Corrected import statement
// import 'bootstrap-dark-5/dist/js/bootstrap.bundle.min.js';  // Corrected import statement
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import Signup from './screens/Signup';
 import MyOrder from './screens/MyOrder';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
      <div >
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createuser' element={<Signup />} />
          <Route path='/myorder' element={<MyOrder/>} />
          {/* <Route path="/cart" component={Cart} /> */}
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;


































