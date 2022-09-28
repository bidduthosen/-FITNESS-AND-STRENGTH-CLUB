import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, time, age, about} =props.product
    console.log(props.product)
    return (
        <div className='products'>
            <div class="col m-3">
                <div class="card">
                    <img src={picture} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p>{about}</p>
                    <h6>For Age: {age}</h6>
                    <h6>Time required: {time}s</h6>
                    </div>
                <button className='border-0 p-3'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Product;