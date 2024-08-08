const mongoose = require('mongoose');
const Products = require('./Products');
const Schema = mongoose.Schema;

// Define the Orders schema
const ordersSchema = new Schema({
    productID: String,
    userID: String,
    quantity: Number,
});


// Create the model
const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;
