const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Accept-Language, Accept-Encoding');
    next();
});

const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const categoryRoute = require('./routes/category');

const UserModel = require('./schemas/user_model');

// Connect to MongoDB Atlas
const url = 'mongodb+srv://ritupatel0964:eZTXyrtNeyAIsNXI@finalproject.xjdpqph.mongodb.net/?retryWrites=true&w=majority&appName=finalproject';

mongoose.connect(url)
    .then(() => console.log('MongoDB Connected Successfully...'))
    .catch(error => console.log(error));



app.post('/api/user', async (req, res) => {
    try {
        const user = new UserModel({ ...req.body });
        const newUser = await user.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/category', categoryRoute);

// Listen server
app.listen(8080, () => {
    console.log(`Server running on http://localhost:${8080}`);
});
