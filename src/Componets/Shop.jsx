import React from 'react';


const Shop = () => {
  return (
    <>
      <div className='shop_dec'>
        <h1>Products</h1>
      </div>
      <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Filter By Category
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Chair</a></li>
          <li><a class="dropdown-item" href="#">Soafa</a></li>
          <li><a class="dropdown-item" href="#">Wireless</a></li>
          <li><a class="dropdown-item" href="#">watch</a></li>
        </ul>
        <input type="text" name='search' placeholder='search...' />
      </div>
    </>
  )
}

export default Shop
