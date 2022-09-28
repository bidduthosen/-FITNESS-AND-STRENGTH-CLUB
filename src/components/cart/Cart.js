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
        </div>
    );
};

export default Cart;