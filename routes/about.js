const path = require('path');

const express = require('express');

const aboutController = require('../controllers/about');


const router = express.Router();

router.get('/seeds', aboutController.getIndex);

router.get('/seed', aboutController.getProducts);

 router.get('/seed/products/:deId', aboutController.getProduct);

module.exports = router;
