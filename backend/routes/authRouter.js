const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// Register a new user
router.post('/register', authController.registerController);
// Login a user
router.post('/login', authController.loginController);


module.exports = router;