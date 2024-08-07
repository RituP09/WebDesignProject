const express = require('express');
const mongoose = require('mongoose');
const CartModel = require('../schemas/cart_model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const carts = await CartModel.find().populate('product_id');
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { user_id, product_id, qty } = req.body;

    let findCart = await CartModel.findOne({ user_id, product_id });

    if (findCart) {
      findCart.qty += qty;
    } else {
      findCart = new CartModel({ user_id, product_id, qty });
    }
    const newCart = await findCart.save();
    res.status(200).json(newCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const currCart = await CartModel.findByIdAndDelete(req.params.id);
    if (!currCart) return res.status(404).json({ message: 'Cart Not Found' });
    res.status(200).json("Cart Deleted Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
