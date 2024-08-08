const productsSchema = require('../models/Products');

// GET all products
const showProduct = async (req, res) => {
    try {
        const products = await productsSchema.find();
        return res.json(products);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    };
  

  const findProduct = ('/', async (req, res) => {
    try {
      const products = await productsSchema.findOne();
      return res.json(products);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });

  const createProduct = async (req, res) => {
    try {
      const { productName, price, description,quantity } = req.body;
      
      // Correctly create a new Product instance with actual values
      let newProduct = new productsSchema({
        productName: productName,
        price: price,
        description: description,
        quantity: quantity,
      });
  
      // Save the new product to the database
      await newProduct.save();
      
      // Send success response
      return res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating product', error: error.message });
    }
  };

  // Update a product by ID
  const updateProduct = async (req, res) => {
    try {
        const product = await productsSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated', product });
    } catch (err) {
        return res.status(500).json({ message: 'Error updating product', error: err.message });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await productsSchema.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).send({ message: 'Error deleting product', error: err.message });
    }
};

  


  module.exports = { showProduct, findProduct, createProduct, updateProduct, deleteProduct }