import React from 'react';
import { useSelector } from 'react-redux';


const OneProduct = () => {
    const oneData = useSelector(state => state.oneProduct)
    console.log(oneData);
    return (
        <>
            {
                oneData.map(item => (
                    <div className='shop_dec'>
                        <h1>{item.productName}</h1>
                    </div>
                ))
            }
        </>
    )
}

export default OneProduct
