import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SliderData, Watchas, discoutProducts, newAravils, products } from './products';

const OneProduct = () => {
    const oneData = useSelector(state => state.oneProduct);
    console.log(oneData);
    // const relatedProducts = discoutProducts.filter(product => product.id === oneData[0].id);
    const [activeTab, setActiveTab] = useState("description");

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            {oneData.map(item => (
                <div key={item.id}>
                    <div className='shop_dec'>
                        <h1>{item.productName}</h1>
                    </div>
                    <section className='oneProduct'>
                        <img src={item.imgUrl} alt="..." />
                        <div className='oneText'>
                            <h3>{item.productName}</h3>
                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                            <span>{item.avgRating}%</span>
                            <aside>
                                <strong>${item.price}</strong>
                                <span>Category: {item.category}</span>
                            </aside>
                            <p>{item.shortDesc}</p>
                        </div>
                    </section>
                    <section>
                    <div>
                            <button
                                className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
                                onClick={() => toggleTab("description")}
                            >
                                Description
                            </button>
                            <button
                                className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
                                onClick={() => toggleTab("reviews")}
                            >
                                Reviews
                            </button>
                        </div>
                        {activeTab === "description" && <p>{item.description}</p>}
                        {activeTab === "reviews" && <p>{item.reviews.map(i=>(
                           <>
                           <aside>{i.rating}</aside>
                           <p>{i.text}</p>
                           </>
                            
                        ))}</p>}
                    </section>
                </div>
            ))}
        </>
    );
};

export default OneProduct;