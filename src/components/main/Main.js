import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Main.css'
import Cart from '../cart/Cart';

const Main = () => {
    const [ products, setProducts ] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    const handleToAddCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="main-container row">
            <div className="club-container cols col-md-9">
                <div className="club-info">
                
                    <h2> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Fitness and Strength Club</h2>
                    <h4>Select Today’s exercise</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    products.map(product => <Product 
                        product ={product}
                        key ={product.id}
                        handleToAddCart={handleToAddCart}
                        ></Product>)
                }
                </div>
            </div>
            
            <div className="cart-container cols col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;