import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Main.css'

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='main-container'>
            <div className="active-club-container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Product 
                        product ={product}
                        key ={product.id}
                        ></Product>)
                }
            </div>
                
            </div>
            
            <div className="cart-container">
                <h3>therea is cart part</h3>
            </div>
        </div>
    );
};

export default Main;