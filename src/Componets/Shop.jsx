import React from 'react';
import { FaSearch } from "react-icons/fa";



const Shop = () => {
  
  return (
    <>
      <div className='shop_dec'>
        <h1>Products</h1>
      </div>
      <div class="btn-group" id='shop_sec'>
        <section>
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By Category |
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Chair</a></li>
            <li><a class="dropdown-item" href="#">Soafa</a></li>
            <li><a class="dropdown-item" href="#">Wireless</a></li>
            <li><a class="dropdown-item" href="#">watch</a></li>
          </ul>
        </section>
        <section className='Shop_in'>
          <input type="text" placeholder='search...' />
          <FaSearch className='shop_icon'/>
        </section>
      </div>

      <div>
      </div>
    </>
  )
}

export default Shop
