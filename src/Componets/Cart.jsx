import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus,FaPlus } from "react-icons/fa";

const Cart = () => {
  const cartData = useSelector(state => state.cartList);
  const dispatch = useDispatch();
  const [cartprice,setCartPrice]=useState(cartData.map(i=>i.price))
  
  return (
    <div className='cart_name'>
      <div>
        {cartData.length > 0 ? cartData.map(item => (
          <div key={item.id} className='Cart_dec m-3' >
            <div>
              <img src={item.imgUrl} alt="..." />
            </div>
            <div className='d-flex'>
              <section >
              
                <h3>{item.productName}</h3>
                <h4> ${item.price}</h4>
                <p>{item.quantity}</p>
              </section>
              <section className='cart_btn'>
                <button ><FaPlus /></button>
                <button ><FaMinus/></button>
                <span >✖️</span>
              </section>
            </div>
          </div>
        )) : <div>
          <h3 >Your Cart is Emty</h3>
        </div>}
      </div>
      <section >
        <h5 className='cart_price'>Grand Totel:</h5>
      </section>
    </div>
  );
};

export default Cart;
