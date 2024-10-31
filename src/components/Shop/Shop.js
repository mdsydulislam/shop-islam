import React, { useState, useEffect } from 'react';
import productsDetails from '../../productsDetails/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Shuffle products and set the state
        const shuffledProducts = shuffleArray([...productsDetails]);
        setProducts(shuffledProducts.slice(0, 10)); // Get first 10 products
    }, []);

    const [cart, setCart] = useState([]);

    const handleAddButton = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddButton = {handleAddButton}
                        product={pd}

                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;