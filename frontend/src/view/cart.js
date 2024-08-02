import React, { useEffect, useState } from 'react';
import { fetchCart } from './api';

function Cart() {
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchCart();
            setProducts(products);
            calculateTotals(products);
        };

        getProducts();
    }, []);

    const calculateTotals = (products) => {
        let subtotal = 0;
        products.forEach((product) => {
            subtotal += product.product_id.price * product.qty;
        });
        setSubtotal(subtotal);
        setTax(subtotal * 0.13);
        setTotal(subtotal + subtotal * 0.13);
    };

    const handleQuantityChange = (productId, qty) => {
        const updatedProducts = products.map((product) => {
            if (product._id === productId) {
                product.qty = qty;
            }
            return product;
        });
        setProducts(updatedProducts);
        calculateTotals(updatedProducts);
    };

    const handleRemoveProduct = (productId) => {
        const updatedProducts = products.filter((product) => product._id !== productId);
        setProducts(updatedProducts);
        calculateTotals(updatedProducts);
    };

    return (
        <>
            <div className="cart-page">
                <div className="cart-items-div">
                    <ul className="cart-list">
                        {products.map((product) => (
                            <li key={product._id} className="cart-item">
                                <h2>{product.product_id.product_name}</h2>
                                <div className="quantity">
                                    <label>Quantity :  </label>
                                    <input
                                        type="number"
                                        value={product.qty}
                                        min={0}
                                        onChange={(e) =>
                                            handleQuantityChange(product._id, parseInt(e.target.value, 10))
                                        }
                                    />
                                </div>
                                <button onClick={() => handleRemoveProduct(product._id)} className="remove">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="summary-div">
                    <h2>Summary</h2>
                    <div className="summary-div-item">
                        Subtotal <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-div-item">
                        Tax (13%) <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="summary-div-item">
                        Total <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="web-btn">Checkout</button>
                </div>
            </div>
        </>
    );
};

export default Cart;