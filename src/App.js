// App.js
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // For route animations.
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import CardInfo from './Components/CardInfo.jsx';
import Login from './Components/LoginSignup/Login.jsx';
import Signup from './Components/LoginSignup/Signup.jsx';
import SampleHome from './Components/LoginSignup/SampleHome.jsx';
import AddtoCart from './Components/CartComponent/AddtoCart.jsx';
import SelectList from './Components/SelectListComponent/SelectList.jsx';
import { useCart } from 'react-use-cart';
import axios from 'axios';
import { useEffect } from 'react';
import BuyInfo from './Components/BuyInfo.jsx';
import {ToastContainer} from 'react-toastify'





function App() {
  const location = useLocation();  // Get the current location of the page.


  const {totalItems} = useCart();

useEffect(() => {
  setTimeout(async () => {
    const email = localStorage.getItem('useremail')
    const cartinfo = localStorage.getItem('react-use-cart')
   await axios.put('http://localhost:8989/updatecart',{email,cartinfo})
    .then(() => {
      console.log("update")
    })
    .catch(() => {
      console.log('err')
    })
  },200)
},[totalItems])

  return (
    <div className="App">
      <Nav /> 
      <AnimatePresence mode="wait"> 
        <Routes location={location} key={location.pathname}> 

          <Route index element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/cardinfo' element={<CardInfo />}/>
          <Route path='/login' element={<Login />}  />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addtocart' element={<AddtoCart />} />

          <Route path='/selectlist' element={<SelectList />} />

          <Route path='/buyinfo' element={<BuyInfo />} />


        {/* <Route path="/" element={<SampleHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
          
          
          
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}

export default App;
