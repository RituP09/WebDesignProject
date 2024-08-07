const express = require('express');
const CategoryModel = require('../schemas/category_model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const category = new CategoryModel({ ...req.body });
        const newCategory = await category.save();
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await CategoryModel.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, req.body);
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async function (req, res) {
    try {
        const currCategory = await CategoryModel.findByIdAndDelete(req.params.id);
        if (!currCategory) return res.status(404).json({ message: 'Category Not Found' });
        res.status(200).json("Category Deleted Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
