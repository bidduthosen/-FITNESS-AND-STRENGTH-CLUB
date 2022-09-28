import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Main.css'
import Cart from '../cart/Cart';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="main-container">
            <div className="club-container">
                <div className="club-info">
                
                    <h2> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness and Strength Club</h2>
                    <h4>Select Today’s exercise</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    products.map(product => <Product 
                        product ={product}
                        key ={product.id}
                        ></Product>)
                }
                </div>
            </div>
            
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;