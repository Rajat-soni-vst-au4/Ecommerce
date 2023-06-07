import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import Cart from "./components/Cart/Cart"
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import CartProvider from "./components/Store/CartProvider";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";



function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <Router >
    <CartProvider>

    {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Routes>

      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<AvailableProducts/>} />
        </Routes>


    </CartProvider>
    </Router>
  );
}

export default App;
