import React, { useEffect, useState } from 'react';
import '../App.css';
import { addProduct, updateProduct, fetchProductById, fetchCategories } from '../view/api';
import { useParams } from 'react-router-dom';

function AddProduct() {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        stock_qty: '',
        image_url: '',
        category_id: ''
    });

    useEffect(() => {
        getCategories();
        if (id) {
            const getProduct = async () => {
                const productItems = await fetchProductById(id);
                setFormData({
                    productName: productItems.product_name || '',
                    description: productItems.description || '',
                    price: productItems.price || '',
                    category_id: productItems.category_id || '',
                    stock_qty: productItems.stock_qty || '',
                });
            };
            getProduct();
        }
    }, [id]);

    const getCategories = async () => {
        const categories = await fetchCategories();
        setCategories(categories);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            var data = {
                'product_name': formData.productName,
                'price': formData.price,
                'category_id': formData.category_id,
                'stock_qty': formData.stock_qty,
                'description': formData.description,
                'image_url': 'https://images.unsplash.com/photo-1613255348289-1407e4f2f980?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            if (id) {
                await updateProduct(id, data);
                alert('Product updated successfully!');
            } else {
                await addProduct(data);
                alert('Product added successfully!');
                setFormData({
                    product_name: '',
                    price: '',
                    category_id: '',
                    stock_qty: '',
                    description: '',
                    image_url: ''
                });
            }
        } catch (error) {
            alert('Failed to add product.');
        }
    };

    return (
        <div className="checkout-container">

            <form className="checkout-form" onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <div className="form-elements">
                    <label>Product Name:</label>
                    <input type="text" name="productName" value={formData.productName} onChange={handleChange} required />
                </div>
                <div className="form-elements">
                    <label>Price: </label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="form-elements">
                    <label>Category:</label>
                    <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleChange}

                    >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                                <option key={category._id} value={category._id}>
                                    {category.category_name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-elements">
                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="form-elements">
                    <label>Stock Quantity:</label>
                    <input type="number" name="stock_qty" value={formData.stock_qty} onChange={handleChange} required />
                </div>
                <button className="web-btn" type="submit">{id ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    );
};

export default AddProduct;
