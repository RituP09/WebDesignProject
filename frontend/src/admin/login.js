import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, password } = formData;
        if (userName === 'admin' && password === 'Admin#12') {
            localStorage.setItem('userRole', 'Admin');
            navigate('/dashboard');
            window.location.reload()
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-elements">
                    <label>Username:</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                </div>
                <div className="form-elements">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button className="web-btn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
