import React from 'react';
import { addToCart } from '../view/api';
import { Link } from 'react-router-dom';


const ProductDetailComponent = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image_url} alt={product.product_name} />
            <div>
                <h2>{product.product_name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button className="button-style" onClick={async () => addToCart(product._id)}>
                    <Link to="/cart" className="no-underline">Add to Cart</Link>
                </button>
            </div>
        </div>
    );
};

export default ProductDetailComponent;