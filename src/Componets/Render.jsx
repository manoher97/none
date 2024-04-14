import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import OneProduct from './OneProduct';
import ErrarePage from './ErrarePage';



const Render = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/OneProduct" element={<OneProduct/>}/>
          <Route exact path="*" element={<ErrarePage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Render
