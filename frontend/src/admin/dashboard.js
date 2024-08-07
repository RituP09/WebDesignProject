import React, { useEffect, useState } from 'react';
import { deleteProduct, fetchProducts } from '../view/api';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [productItems, setProductItems] = useState([]);

    const getProducts = async () => {
        const productItems = await fetchProducts();
        setProductItems(productItems);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleRemoveProduct = (productId) => {
        deleteProduct(productId)
        getProducts();
    };

    return (
        <div>
            <div className='admin-add-product'>
                <Link to={`/product/add`} className="no-underline">
                    <button>Add</button>
                </Link>
            </div>
            {productItems.length > 0 ?
                <ul className="product-list">
                    {productItems.map((product) => (
                        <li key={product._id} className="cart-item">
                            <div>
                                <p style={{ marginRight: "10px" }}><b>{product.product_name}</b></p>
                                <p>Category : {product.category.category_name}</p>
                            </div>
                            <div>
                                <Link to={`/product/update/${product._id}`} className="no-underline" style={{ marginRight: "10px" }}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleRemoveProduct(product._id)} className="remove">Remove</button>
                            </div>
                        </li>
                    ))}
                </ul> :
                <div>
                    <h2><center>Product is Empty</center></h2>
                </div>
            }

        </div>
    );
};

export default Dashboard;