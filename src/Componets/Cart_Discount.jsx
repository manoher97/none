import React from 'react';
import { discoutProducts } from './products';
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Cart_Discount = () => {
    return (
        <div className='discount_dec'>
            <h1>Big Discuont</h1>
            <div className='dic_dec'>

                {
                    discoutProducts.map(item => (
                        <div key={item.id} className="card" id="dicount">
                            <div>
                                <img src={item.imgUrl} className="card-img-top" alt="..." />
                                <span>{item.discount}% off</span>
                                <sup>{item.hurtLike}</sup>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                <div className='dic_btn'>
                                    <strong>${item.price}</strong>
                                    <button><IoMdAdd/></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart_Discount
