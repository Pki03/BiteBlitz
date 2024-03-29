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


//there was also an update option which i can use to update same orders but i am not adding it due to time restrictions


//errors to see

//will have to debug from start
//when click on signup i have to enter again so that form can come
//invalid price coming in table while doing checout and totalPrice wrong
//when click on checkout nothing hapenning




//mongodb used to store data on server and very reliable efficient
//node.js is javascript used at backend
//express.js is javascript used at backend
//react involves using components to make frontend
//npx create react app foodapp
//cd foodapp
//npm start
//remove src.js all things
// see bootstrap dark
//paste in index.html above title the bootstrap dark thing
//create components folder
//create navbar file in it
//import navbar in app.js
//make screens folder
//whatever things which are reusable like navbar and footer in components and different pages like home etc in screens
//make a connection bw navbar home and app.js
//make a footer also
//such that navbar then body thenj footer
//copy code of navbar from bootstrap and paste it in navbar.js
//in navbar replace class with classname as class only used for jsx
//change # with / using ctrl shifft l
//now we use react router dom so that when we click on diff elements on navbar they dont reload
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
//paste above in app.js
//replace home with router then routes then route as done above
//import link from react-router-dom in navbar.js
//in navbar replace all anchor tag with Link
//replace href with to
//create new login.js in screens
//connect login to app.js byimporting and placing a route
//remove disabled and pricing from navvbar
//change features to login
//in navbar change navbar name to some good food app name
//change the text propertis if you want
//add text font in index.css
//add webfonts link in html file just above title
//select image cap card from bootstrap and paste in home.js replacing body and then correct the code accordingly
// then set margin and maxHeight in it 
// create a class name container in cardBody
//also create a select in home.js for quantity dropdown as well as full or half
//make a total price div below it
//make a card component
//put all the full card component into its file cutting it from home.js
//copy footer link code and paste in footer.js
//remove li in footer.js
//replace a href with Link also import Link in footer.js
//create Carousel in components change class to className crossfade
//unsplasjh source random go to awik.io copy size by image link paste in iimg of Carousel add ? at end
// npm i react-bootstrap
//now import some node modules in app.js of react-bootstrap
//optimise the code of carousel.js by using useEffect
//now we add search functionality in carousal first bootstap navbar there go to form and select only form component
//add it into carousal code creating new div  carousal caption
//add z Index property in carousal
//change the button and search bar accordingly
//now add card photo from media-istock photos
//give margin to card in home.js
//go to index.css and make identity carousel
//also add objectfit setting in carousel.js
//go to mongo db atlas login at edge
//insert document at collection and then paste the json document file
//now handling express.js and mongoose

// doing backend handling

//make folder backend in foodapp
// npm init command
//npm install nodemon mongoose express
//in gitignore remove / from node_modules
//create index.js in backend and copy paste express hello world example change port to 5000
//create file db.js
//do all mongoose connections as done
//change dircety to backend
//write necessary code in db.js and index.js
//add database near question mark in mongodb url link
//now add fetched data part in db.js

//make models schema routes 

//make models folder in backend and create User.js and write necessary code in it usuall userschema
//create folder in backend called Routes and create file called CreateUser.js  and write necessary code
//add below lines in index.js
//app.use(express.json());
//app.use('/api',require('./Routes/CreateUser'));
//in thunder client add header like client and application json
//put json file random in json of thunder client click post then see it come as users on mongo atlas
//npm install --save express-validator
//modify the createUser file or write directly
//
//in createuser we added password name and min length should be 5 and also will display erro if we put request without seeing the requirements
//now split terminal
//now for frontend in screens create new file signup.js
//in navbar create url for signup similar to login
//form bootstrap 5 pasten in signup.js change class to className remove checkbox feed
//now add route of signuop createuser in app.js
//now add onSubmit functionality in signup.js
//handleSubmit we use e or any other word which is synthetic keyword
//  const [credentials,setcredentials]=useState() use it for useEffect hooks
//add cors in index.js and its related code also npm install cors
//similar to signup page create a login page using chatgpt easy
//made some changes in the styling of login page ,sign up page, navbar page 
//if confusion go to https://chat.openai.com/c/44d5b8c5-c3dc-4240-95f1-287f1ff8c70a

//copy router.post loginuser component from createUser and paste it again in same file
// add usenavigate component in login.js


//adding hashing 

//now we add tokens to our password
//npm i bcryptjs jsonwebtoken
//in createuser file do const bcrypt 
//do const salt
//let secpassword
//do const jwt
//do pwdcompare
//do jwtSecret
//make changes add bcryptjs salt securePassword
//add all jwt token and secret code sentence and logic

//display data on react frontend

//now we will display json format data on  react frontend
//add below in db.js
//global.food_items=data;
//console.log(global.food_items);
//add in index.js app.use('/api', require('./Routes/DisplayData'));
//create DisplayData.js in Routes similar to createuser.js
//http://localhost:5000/api/foodData
//add the food.data and food.category functionality in db.js such that it displays when displaydata request carried out
//now go to Home.js and add useEffect,useState field
/*
  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        }
      });
      response = await response.json();
      // Update state with the fetched data
      setFoodItems(response[0]);
      setFoodCategory(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
*/
//in card now we do mapping use map function so we have to call only once
//then we display food category by taking array and then displaying specific terms using map function in Home.js
//then we add functionality where changing window size will effect the no.of cards in particular row
//now we use props where each json element is particularly attached to each individual card by using props in Card.js use name options imgSrc
//we use props for options half and full logic regular medium large
//remove carousel component from carousel.js and directly add in home.js because we want to add search functionality
//now search , setsearch and add search functionalituy
//for making all the images of same size
//in img of card add style height to around 150px and objectFit to fill

//now logic for navbar

//we added myCart and orders Buttons and the logic used is when logged in we have orders cart and logout buttons and when logged out we have sign in and log in

//add to cart functionality 1

//context is used which means that click on one button goes to another link and then on other link to use on global level react context is used
//react reducer means when we click on one addtocart it points to particular item and other button to other
//make component ContextReducer.js
//add all context reducer code also link wrap with app.js
// send options separately and img and name in same way
//changes price value when qty or size increased by ADD option

//now addtocart functionalty 2
//add badge to show amount of items added in cart in navbar.js
//copy cart.js file
//copy modal.js file
//in index.html add div cart-root
// add in navbar.js  const [cartView,setCartView]=useState(false);
//also add in it    {cartView?<Modal></Modal>:null}
//also create logic for update and drop and apply it in contexreducer and card

//now for Cart checkout 

// in models create orders.js
//create route orderdata.js
//add this in login.js localStorage.setItem("userEmail",credentials.email);
//then write logic for hadlecheckout

//my orders page

//create myorderdata logic path in OrderData backend
//create screen MyOrder.js
//add link in navbar

































