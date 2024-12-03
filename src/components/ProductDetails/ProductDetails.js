import React from 'react';
import { useParams } from 'react-router-dom';
import productsDetails from '../../productsDetails/products.json';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productId} = useParams();
    const product = productsDetails.find(pd => pd.id === productId);
    return (
        <div>
            <h1>Product Details of {product.name}</h1>
            <Product displayAddCartButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;