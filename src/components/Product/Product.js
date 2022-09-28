import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, time, age, about} =props.product
    // console.log(props.product)
    return (
        <div className="products">
            <div className="col m-3">
                <div className="card info">
                    <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{about}</p>
                    <h6>For Age: {age}</h6>
                    <h6>Time required: {time}s</h6>
                    <button className="btn-cart">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;