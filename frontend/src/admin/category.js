import React, { useEffect, useState } from 'react';
import { deleteCategory, fetchCategories } from '../view/api';
import { Link } from 'react-router-dom';

function Category() {
    const [categoryItems, setcategoryItems] = useState([]);

    const getCategories = async () => {
        const categoryItems = await fetchCategories();
        setcategoryItems(categoryItems);
    };

    useEffect(() => {
        getCategories();
    }, []);

    const handleRemoveCategory = (categryId) => {
        deleteCategory(categryId)
        getCategories();
    };

    return (
        <div>
            <div className='admin-add-product'>
                <Link to={`/category/add`} className="no-underline">
                    <button>Add</button>
                </Link>
            </div>
            {categoryItems.length > 0 ?
                <ul className="product-list">
                    {categoryItems.map((category) => (
                        <li key={category._id} className="cart-item">
                            <div>
                                <p style={{ marginRight: "10px" }}><b>{category.category_name}</b></p>
                            </div>
                            <div>
                                <Link to={`/category/update/${category._id}`} className="no-underline" style={{ marginRight: "10px" }}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleRemoveCategory(category._id)} className="remove">Remove</button>
                            </div>
                        </li>
                    ))}
                </ul> :
                <div>
                    <h2><center>Category is Empty</center></h2>
                </div>
            }

        </div>
    );
};

export default Category;