import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';


const Render = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default Render
