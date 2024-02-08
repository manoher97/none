import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartData';


const Products = () => {
    const dispatch =useDispatch()
    const [products, getProducts] = useState([])
    useEffect(() => {
        // api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(resutl => getProducts(resutl))
    },[]);
    const addToCart=(product)=>{
       dispatch(add(product))
    //    console.log(product);
    }

    return (
        <div className='row m-1'> 
            {
                products.map(product => (
                    
                        <div className="card col-md-3 mb-3" >
                            <center className='mt-3'>
                            <img src={product.image} className="card-img-top" alt="..." style={{width:'100px', height:'130px'}} />
                            </center>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">INR :{product.price}</p>
                            </div>
                            <footer>
                                <button className="btn btn-primary mb-2" onClick={()=>addToCart(product)}>Add to Cart</button>
                            </footer>
                        </div>
                ))
            }
        </div>
    )
}

export default Products;
