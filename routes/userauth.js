const express = require('express');

const userauthController = require('../controllers/userauth');

const router = express.Router();

router.get('/userlogin', userauthController.getLogin);

router.get('/usersignup', userauthController.getSignup);

router.post('/userlogin', userauthController.postLogin);

router.post('/usersignup', userauthController.postSignup);

router.post('/logout', userauthController.postLogout);

router.get('/reset', userauthController.getReset);

router.post('/reset', userauthController.postReset);

router.get('/reset/:token', userauthController.getNewPassword);

router.post('/new-password', userauthController.postNewPassword);

module.exports = router;
