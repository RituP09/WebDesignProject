import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../view/api';

// const imageUrl = 'https://images.unsplash.com/photo-1613255348289-1407e4f2f980?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Product = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image_url} alt={product.product_name} />
            <div>
                <h2>{product.product_name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <Link to={`/product/${product._id}`} className="text-decoration-none">View Details</Link>
                <button className="button-style" onClick={async () => addToCart(product._id)}>
                    <Link to="/cart">Add to Cart</Link>
                </button>
            </div>
        </div>
    );
};
export default Product;
