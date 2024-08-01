const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen server
app.listen(8080, () => {
    console.log(`Server running on http://localhost:${8080}`);
});
