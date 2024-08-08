const ordersSchema = require('../models/Orders');
const productsSchema = require('../models/Products');


const showOrder = async (req, res) => {
    try {
        const orders = await ordersSchema.find();
        return res.json(orders);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    };
  

  const findOrder = ('/', async (req, res) => {
    try {
      const orders = await ordersSchema.findOne();
      return res.json(orders);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });

  const createOrder = async (req, res) => {
    try {
      const { productID, userID,quantity } = req.body;
      
      // Correctly create a new Product instance with actual values
      let newOrder = new ordersSchema({
        productID: productID,
        userID: userID,
        quantity: quantity,
      });

    let product = await productsSchema.findById(productID) 
    if (product) {
        newQuan = product.quantity - quantity
        if (newQuan>=0){
        await productsSchema.updateOne(
            {_id: productID},
            {$set:{quantity: newQuan}}

        )
        await newOrder.save();

        }else{ throw{message: "not enoungh item",status:400}


    }
    }
      // Save the new product to the database      
      // Send success response
      return res.status(201).json({ message: 'Order created successfully', orders: newOrder });
    } catch (error) {
      console.error(error);
      return res.status(error.status||500).json({ message: 'Error creating order', error: error.message });
    }
  };

  module.exports = { showOrder, findOrder, createOrder }