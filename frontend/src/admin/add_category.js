import React, { useEffect, useState } from 'react';
import '../App.css';
import { fetchCategoryById, updateCategory, addCategory } from '../view/api';
import { useParams } from 'react-router-dom';

function AddCategory() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        category_name: '',
        description: ''
    });

    useEffect(() => {
        if (id) {
            const getCategory = async () => {
                const categoryItems = await fetchCategoryById(id);
                setFormData({
                    category_name: categoryItems.category_name || '',
                    description: categoryItems.description || ''
                });
            };
            getCategory();
        }
    }, [id]);


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
                'category_name': formData.category_name,
                'description': formData.description
            }
            if (id) {
                await updateCategory(id, data);
                alert('Category updated successfully!');
            } else {
                await addCategory(data);
                alert('Category added successfully!');
                setFormData({
                    category_name: '',
                    description: ''
                });
            }
        } catch (error) {
            alert('Failed to add Category.');
        }
    };

    return (
        <div className="checkout-container">

            <form className="checkout-form" onSubmit={handleSubmit}>
                <h1>Add Category</h1>
                <div className="form-elements">
                    <label>Category Name:</label>
                    <input type="text" name="category_name" value={formData.category_name} onChange={handleChange} required />
                </div>
                <div className="form-elements">
                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <button className="web-btn" type="submit">{id ? 'Update' : 'Submit'}</button>
            </form>
        </div>
    );
};

export default AddCategory;
