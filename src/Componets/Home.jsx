import React from 'react';
import Curocel from './Curocel';
import AddOn from './AddOn';
import Cart_Discount from './Cart_Discount';




const Home = () => {
  return (
    <div>
      <div>
        <Curocel />
      </div>
      <section>
        <AddOn />
      </section>
      <section><Cart_Discount/></section>

    </div>
  )
}

export default Home
