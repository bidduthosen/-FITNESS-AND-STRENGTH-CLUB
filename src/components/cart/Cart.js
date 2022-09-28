import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div >
                <h4>Md:Biddut Hosen</h4>
                <h6><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <small>mymensingh, dhaka</small></h6>
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

        </div>
    );
};

export default Cart;