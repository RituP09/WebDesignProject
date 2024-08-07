const express = require('express');
const ProductModel = require('../schemas/product_model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find().populate('category_id');
        const result = products.map(product => {
            const { category_id, ...rest } = product.toObject();
            return {
                ...rest,
                category: category_id
            };
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const product = new ProductModel({ ...req.body });
        const newProduct = await product.save();
        res.status(200).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async function (req, res) {
    try {
        const currProduct = await ProductModel.findByIdAndDelete(req.params.id);
        if (!currProduct) return res.status(404).json({ message: 'Product Not Found' });
        res.status(200).json("Product Deleted Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
