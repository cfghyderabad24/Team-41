
const loginController = require('../controllers/loginController');
const express = require('express');

const router = express.Router();

router.post('/log',loginController.donorLogin);
router.post('/reg',loginController.donorRegister);
router.post('/verify/:email',loginController.loginVerification);


module.exports = router;