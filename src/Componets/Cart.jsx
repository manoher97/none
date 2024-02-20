import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {add} from "../Storage/Action"

const Cart = () => {
  const cartData = useSelector(state => state.cartList);
  const dispatch = useDispatch();

  const uniqueCartData = cartData.reduce((acc, currentItem) => {
    const existingItemIndex = acc.findIndex(item => item.id === currentItem.id);

    if (existingItemIndex !== -1) {
      // If item already exists in cart, increase its quantity
      acc[existingItemIndex] = {
        ...acc[existingItemIndex],
        quantity: acc[existingItemIndex].quantity + 1
      };
    } else {
      // If item doesn't exist in cart, add it to the cart
      acc.push({ ...currentItem, quantity: 1 });
    }

    return acc;
  }, []);

  const handleAddToCart = (item) => {
    dispatch(add(item));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {uniqueCartData.map(item => (
          <div key={item.id}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAddToCart(item)}>Add more</button>
            {/* Add more item details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;



// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// const Cart = () => {
//   const CartData=useSelector(state =>state.cartList)
//   console.log(CartData)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cart
