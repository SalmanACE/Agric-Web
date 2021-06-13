const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const isAuth = require('../middleware/is-auth');

const isUser = require('../middleware/is-user');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart',isUser, shopController.getCart);

router.post('/cart',isUser, shopController.postCart);

router.post('/cart-delete-item', isUser, shopController.postCartDeleteProduct);

// router.get('/admincart',isAuth, shopController.getadminCart);

// router.post('/admincart',isAuth, shopController.postdminCart);

// router.post('/admincart-delete-item', isAuth, shopController.postadminCartDeleteProduct);

// router.post('/create-order', isAuth, shopController.postOrder);

// router.get('/orders', isAuth, shopController.getOrders);

module.exports = router;
