const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
const url = 'mongodb+srv://ritupatel0964:eZTXyrtNeyAIsNXI@finalproject.xjdpqph.mongodb.net/?retryWrites=true&w=majority&appName=finalproject';

mongoose.connect(url)
    .then(() => console.log('MongoDB Connected Successfully...'))
    .catch(err => console.log(err));

// Listen server
app.listen(8080, () => {
    console.log(`Server running on http://localhost:${8080}`);
});
