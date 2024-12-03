import React, { useEffect, useState } from 'react';
import { loadCart } from '../../utilities/localDB';
import productsDetails from '../../productsDetails/products.json';
import CartItem from '../CartItem/CartItem';
const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect( () => {
        const saveCart = loadCart();
        const productIdOnly = Object.keys(saveCart);
        const cartProducts = productIdOnly.map( id => {
            const product = productsDetails.find(pd => pd.id === id);
            return product;
        });
        setCart(cartProducts);
    }, [])

    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => <CartItem
                    id={pd.id}
                    product={pd}></CartItem>)
            }
        </div>
    );
};

export default Review;