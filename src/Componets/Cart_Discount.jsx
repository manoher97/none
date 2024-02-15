import React from 'react';
import { discoutProducts } from './products';
console.log(discoutProducts);

const Cart_Discount = () => {
    return (
        <div className=''>
            {
                discoutProducts.map(item => (
                    <div className="card justify-content-center" style={{ width: "18rem" }}>
                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.productName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                            <bold>${item.price}</bold>
                            <a href="#" className="btn btn-primary">Go</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart_Discount
