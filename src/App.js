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
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Products/ProductsDetails";



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

      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={< ContactUs/>} />
      <Route path="/product" element={<AvailableProducts/>} />
      <Route path="/product/:imageUrl" element={<ProductDetails/>}/>
        </Routes>


    </CartProvider>
    </Router>
  );
}

export default App;
