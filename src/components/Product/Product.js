import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, Time, age, about} =props.product
    console.log(props.product)
    return (
        <div className='products'>
            <div class="col m-3">
                <div class="card">
                    <img src={picture} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>{about}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;