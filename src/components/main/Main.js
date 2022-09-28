import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
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
        <div className="main-container">
            <div className="club-container">
                <div className="club-info">
                
                    <h2> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness and Strength Club</h2>
                    <h4>Age Select today’s exercise</h4>
                </div>
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