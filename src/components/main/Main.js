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

            {/* model  */}
            <div>
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Important Question in react</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className='blog-info'>
                             <h4>1. How does react work?</h4>
                             <small>Ans: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</small>
                        </div>
                        <div className='blog-info'>
                             <h4>2. That's the difference between props and state</h4>
                             <small>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</small>
                        </div>
                        <div className='blog-info'>
                             <h4>3. What is the difference between useEffect in React?</h4>
                             <small>This snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks.
                             Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” you’ve likely performed them in your components before.</small>
                        </div>
                       </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

    );
};

export default Main;