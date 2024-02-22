import React from 'react';
import { newAravils } from './products';
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Storage/Action';
const NewProducts = () => {
    const dispatch = useDispatch();
    const cartHandler = (item) => {
        
          dispatch(addToCart(item));
    };
 
    return (
        <div>
            <div>
                <h1>New Arrivals</h1>
                <div className='dic_dec'>
                    {newAravils.map(item => (
                        <div key={item.id} className="card" id="dicount">
                            <div>
                                <img src={item.imgUrl} className="card-img-top" alt="..." />
                                <sup>{item.hurtLike}</sup>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.productName}</h5>
                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                <div className='dic_btn'>
                                    <strong>${item.price}</strong>
                                    <button onClick={() => cartHandler(item,1)}><IoMdAdd /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
