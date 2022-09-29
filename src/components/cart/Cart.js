import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    const [time, setTime] =useState(0);

    let total= 0;
    for(const product of cart){
        total = total + product.time;
    };
    const clickedButton =(value)=>{
        console.log('data', value);
        setTime(value)
    }
    return (
        <div className='cart'>
            <div >
                <h4>Md:Biddut Hosen</h4>
                <h6><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <small>Mymensingh, Dhaka</small></h6>
            </div>
            <div className='my-info d-md-flex justify-content-md-around'> 
                <div>
                    <h6>59<sub>kg</sub></h6>
                    <h6><sub>Width</sub></h6>
                </div>  
                <div>
                    <h6>5.11</h6>
                    <h6><sub>Higth</sub></h6>
                </div>
                <div>
                    <h6>22<sub>yrs</sub></h6>
                    <h6><sub>Age</sub></h6>
                </div>
            </div>
            <div className='break-info'>
                <h4>Add A Break</h4>
                <div className='d-md-flex justify-content-md-around break-btn my-info'>
                    <button onClick={()=>clickedButton(10)}>10s</button>
                    <button onClick={()=>clickedButton(20)}>20s</button>
                    <button onClick={()=>clickedButton(30)}>30s</button>
                    <button onClick={()=>clickedButton(40)}>40s</button>
                </div>
            </div>
            <div className='exercise-info'>
                <h4>Exercise Details</h4>
                <h5 className='my-info'>Exercise time : {total} seconds</h5>
                <h5 className='my-info'>Break time: {time} seconds</h5>
            </div>
            <div className='mt-5'>
                <h4 className='my-info text-center bg-info'>Activity Completed</h4>
            </div>

        </div>
    );
};

export default Cart;