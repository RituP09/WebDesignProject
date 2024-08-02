import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import Product from '../component/product';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        getProducts();
    }, []);

    return (
        <>
            <div className="product-list">
                <h1>Trending Products</h1>
                <div className="product-grid">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
