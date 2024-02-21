import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, Delete, remove } from '../Storage/Action';
import { FaMinus,FaPlus } from "react-icons/fa";

const Cart = () => {
  const cartData = useSelector(state => state.cartList);
  const dispatch = useDispatch();
  const [cartprice,setCartPrice]=useState(cartData.map(i=>i.price))
  console.log(cartprice);
   const uniqueCartData = cartData.reduce((acc, currentItem) => {
    const existingItemIndex = acc.findIndex(item => item.id === currentItem.id);
    if (existingItemIndex !== -1) {
      acc[existingItemIndex] = {
        ...acc[existingItemIndex],
        quantity: acc[existingItemIndex].quantity + 1
      };
    } else {
      acc.push({ ...currentItem, quantity: 1 });
    }
    
    return acc;
  }, []);

  const handleAddToCart = (item) => {
    setCartPrice(cartData.map(i=>i.price))
    dispatch(add(item));
  };

  const handleRemoveFromCart = (item) => {
    cartData.map(i=>i.price)
    dispatch(Delete(item));
  };
  const handleDeleteCart = (item) => {
    cartData.map(i=>i.price)
    dispatch(remove(item))
  }

  return (
    <div className='cart_name'>
      <div>
        {uniqueCartData.length > 0 ? uniqueCartData.map(item => (
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
                <button onClick={() => handleAddToCart(item)}><FaPlus /></button>
                <button onClick={() => handleRemoveFromCart(item)}><FaMinus/></button>
                <span onClick={() => handleDeleteCart(item)}>✖️</span>
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
