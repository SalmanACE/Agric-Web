const path = require('path');

const express = require('express');

const homeController = require('../controllers/home');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth ,homeController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth ,homeController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth ,homeController.postAddProduct);

router.get('/edit-product/:deId', isAuth ,homeController.getEditProduct);

router.post('/edit-product', isAuth ,homeController.postEditProduct);

router.post('/delete-product',isAuth , homeController.postDeleteProduct);

module.exports = router;
