import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from './card/Cart';

const Home = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('prouducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className='row'>
           {
            products.map(product=><Cart
            key={product.id}
            product={product}
            >

            </Cart>)
           }
        </div>
    );
};

export default Home;