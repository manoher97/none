import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Shop';
import Cart from './Cart';
import Home from './Home';


const Render = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Shop" element={<Shop/>}/>
            <Route exact path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>

      
    </div>
  )
}

export default Render
