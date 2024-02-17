const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

// Register a new user
authRouter.post('/register', authController.register);

// Login and generate a token
authRouter.post('/login', authController.login);

// Logged out 
authRouter.post('/login', authController.logoutUser);

module.exports = authRouter;
