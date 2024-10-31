import React from 'react';

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
        <div>
            <h4>Order Summary</h4>
            <p>Total Item Orderd: {cart.length}</p>
            <p>Product Price: ${total.toFixed(2)}</p>
            <p>Shipping Cost: ${shippingCost}</p>
            <p>Tax & Vat Total: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;