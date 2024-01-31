import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const addProducts= useLoaderData()
    console.log(addProducts)
    return (
        <div>
            
            <h1>akash{ addProducts.length} </h1>
        </div>
    );
};

export default Order;