import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function CheckoutForm() {
    const navigate = useNavigate();

    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    return (
        <div className="checkout-container">
            {showSuccess ?
                (
                    <div>
                        <div>
                            <h2>Success</h2>
                            <p>Order has been placed successfully.</p>
                            <button className="web-btn" onClick={() => {
                                navigate('/product');
                            }}>Buy some more</button>
                        </div>
                    </div>
                ) :
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-elements">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>City:</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>State:</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>Zip Code:</label>
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>Card Number:</label>
                        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>Expiry Date:</label>
                        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                    </div>
                    <div className="form-elements">
                        <label>CVV:</label>
                        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                    </div>
                    <button className="web-btn" type="submit">Submit</button>
                </form>}
        </div>
    );
};

export default CheckoutForm;
