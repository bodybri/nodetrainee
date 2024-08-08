var express = require('express');
const { createUser,loginUser, approveUser } = require('../controller/userController');
const { showProduct, findProduct, createProduct, deleteProduct, updateProduct } = require('../controller/productController');
const { showOrder, findOrder, createOrder } = require('../controller/orderController');
var router = express.Router();

/* GET users listing. */
router.get('/', ); //passed

router.post('/register', createUser)  //passed
router.post('/login', loginUser) //passed
router.put('/approve/:id', approveUser) //passed

router.get('/products', showProduct) //passed
router.get('/products/:id', findProduct) //passed
router.post('/products', createProduct ) //passed
router.put('/products/:id', updateProduct )  //passed
router.delete('/products/:id', deleteProduct ) //passed

router.get('/orders', showOrder ) //passed
router.get('/orders/:id', findOrder ) //passed
router.post('/orders', createOrder ) //passed



module.exports = router;
