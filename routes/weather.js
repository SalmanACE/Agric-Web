const path = require('path');

const express = require('express');

const weatherController = require('../controllers/weather');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth ,weatherController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth ,weatherController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth ,weatherController.postAddProduct);

router.get('/edit-product/:deId', isAuth ,weatherController.getEditProduct);

router.post('/edit-product', isAuth ,weatherController.postEditProduct);

router.post('/delete-product',isAuth , weatherController.postDeleteProduct);

module.exports = router;
