import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock, id } = props.product;
    const noImageAvailable = 'https://via.placeholder.com/150?text=No+Image';

    return (
        <div className="product">
            <div className="product-image-container">
                {img ? (
                    <img
                        className="product-img"
                        src={img}
                        alt={name || "Product Image"}
                        onError={(e) => (e.target.src = noImageAvailable)}
                    />
                ) : (
                    <img
                        className="product-img"
                        src={noImageAvailable}
                        alt="No Image Available"
                    />
                )}
            </div>
            <div className="product-details">
                <h4 className="product-name">
                    <Link to={`/product/${id}`}>{name || "Unnamed Product"}</Link>
                </h4>
                <p className="product-seller"><small>by: {seller || "Unknown Seller"}</small></p>
                <p className="product-price"><small>$ {price || "0.00"}</small></p>
                <p className="product-stock">
                    <small>Only {stock || 0} left in stock</small>
                </p>
                {props.displayAddCartButton && (
                    <button
                        className="add-button"
                        onClick={() => props.handleAddButton(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
