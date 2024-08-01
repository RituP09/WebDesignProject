const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: {
        type: String, required: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    stock_qty: { type: Number, default: 0 },
    description: { type: String },
    image_url: { type: String }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;