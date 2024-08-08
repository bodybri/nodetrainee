const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

// Define the Product schema
const productsSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    description: String,
    quantity: Number,
});

// Create the model
module.exports = mongoose.model('Product', productsSchema);