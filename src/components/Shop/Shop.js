import React, { useState, useEffect } from 'react';
import productsDetails from '../../productsDetails/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { saveCartItem } from '../../utilities/localDB';

const Shop = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const shuffledProducts = shuffleArray([...productsDetails]);
        setProducts(shuffledProducts.slice(0, 12)); // Get first 12 products
    }, []);

    const handleAddButton = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter((pd) => pd.id === product.id);
        const count = sameProduct.length;
        saveCartItem(product.id, count);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((pd) => (
                    <Product
                        key={pd.id}
                        id={pd.id}
                        displayAddCartButton={true}
                        handleAddButton={handleAddButton}
                        product={pd}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
