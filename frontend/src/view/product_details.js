import React, { useEffect, useState } from 'react';
import { fetchProductById } from './api';
import { useParams } from 'react-router-dom';
import ProductDetailComponent from '../component/details_product';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const product = await fetchProductById(id);
            setProduct(product);
        };
        getProduct();
    }, [id]);

    return (
        <div className="product-detail">
            <ProductDetailComponent key={product._id} product={product} />
        </div>
    );
};

export default ProductDetail;