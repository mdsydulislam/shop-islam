import React from 'react';

const CartItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemsStyle = {
        borderBottom: '1px solif lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={reviewItemsStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br />
            <button className='add-button'>Remove</button>
            <hr />
        </div>
    );
};

export default CartItem;