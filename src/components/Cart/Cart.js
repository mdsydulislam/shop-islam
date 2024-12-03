import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i=0; i<cart.length; i++){
        const pdct = cart[i];
        total = total + pdct.price;
    }
    //or
    // const total = cart.reduce((total, pdct) => total + pdct.price, 0);

    let shippingCost = 0;
    if(total > 100){
        shippingCost = 0;
    }
    else if(total > 50){
        shippingCost = 8;
    }else if(total>0){
        shippingCost = 15;
    }

    const tax = ((total * 5) / 100).toFixed(2);

    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2)
    
    return (
        <div className="cart-summary">
            <h4 className="cart-title">Order Summary</h4>
            <div className="cart-details">
                <p>Total Items Ordered: <span>{cart.length}</span></p>
                <p>Product Price: <span>${total.toFixed(2)}</span></p>
                <p>Shipping Cost: <span>${shippingCost}</span></p>
                <p>Tax & VAT: <span>${tax}</span></p>
                <p className="cart-total">Total Price: <span>${grandTotal}</span></p>
            </div>
            <Link to="/review">
                <button className="review-order-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;