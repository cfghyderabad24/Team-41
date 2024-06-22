
const registerController = require('../controllers/registerController');
const express = require('express');

const router = express.Router();

router.post('/reg',registerController.loginRegister);


module.exports = router;