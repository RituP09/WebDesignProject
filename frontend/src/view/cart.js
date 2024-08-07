import React, { useEffect, useState } from 'react';
import { deleteFromCart, fetchCart } from './api';
import { Link } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            const cartItems = await fetchCart();
            setCartItems(cartItems);
            calculateTotals(cartItems);
        };

        getProducts();
    }, []);

    const calculateTotals = (cartItems) => {
        let subtotal = 0;
        cartItems.forEach((product) => {
            if (product && product.product_id) {
                subtotal += product.product_id.price * product.qty;
            }
        });
        setSubtotal(subtotal);
        setTax(subtotal * 0.13);
        setTotal(subtotal + subtotal * 0.13);
    };

    const handleQuantityChange = (productId, qty) => {
        const updatedProducts = cartItems.map((product) => {
            if (product._id === productId) {
                product.qty = qty;
            }
            return product;
        });
        setCartItems(updatedProducts);
        calculateTotals(updatedProducts);
    };

    const handleRemoveProduct = (cartId) => {
        deleteFromCart(cartId)
        const updatedProducts = cartItems.filter((product) => product._id !== cartId);
        setCartItems(updatedProducts);
        calculateTotals(updatedProducts);
    };

    return (
        <>
            {cartItems.length > 0 ?
                <div className="cart-page">
                    <div className="cart-items-div">
                        <ul className="cart-list">
                            {cartItems.map((product) => {
                                if (product && product.product_id) {
                                    return (
                                        <li key={product._id} className="cart-item">
                                            <h2>{product.product_id.product_name}</h2>
                                            <div className="quantity">
                                                <label>Quantity:</label>
                                                <input
                                                    type="number"
                                                    value={product.qty}
                                                    min={0}
                                                    onChange={(e) =>
                                                        handleQuantityChange(product._id, parseInt(e.target.value, 10))
                                                    }
                                                />
                                            </div>
                                            <button onClick={() => handleRemoveProduct(product._id)} className="remove">
                                                Remove
                                            </button>
                                        </li>
                                    );
                                }
                                return null;
                            })}
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

                        <Link to={`/cart/checkout`} className='no-underline'><button className="web-btn" >Checkout</button></Link>
                    </div>
                </div> :
                <div>
                    <h2><center>Cart is Empty</center></h2>
                </div>
            }

        </>
    );
};

export default Cart;