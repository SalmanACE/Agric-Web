const path = require('path');

const express = require('express');

const sortController = require('../controllers/sort');

const router = express.Router();

// router.get('/', aboutController.getIndex);

// router.get('/seed', aboutController.getProducts);

 router.get('/seed/products/:deId', sortController.getProduct);

//router.get('/', sortController.getweatherIndex);

router.post('/select', sortController.getoneProduct);

router.get('/', sortController.getclimateIndex);

router.get('/choose/land', sortController.getlandIndex);
//router.get('/choose/:climate/:land', sortController.getweatherProducts);
router.get('/choose/:climate', sortController.getclimateProducts);
router.get('/land/:land', sortController.getlandProducts);

//mongodb+srv://jayakkavin:jayakkavin@cluster0.5mlkz.mongodb.net/agro?retryWrites=true&w=majority
module.exports = router;
