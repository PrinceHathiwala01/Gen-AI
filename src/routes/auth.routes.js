const express = require('express');
const authRouter = express.Router();
const registerController = require("../controllers/auth.controller");

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", registerController.registerUserController);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post("/login", registerController.loginUserController);

/**
 * @route POST /api/auth/logout
 * @desc Logout a user
 * @access Public
 */
authRouter.post("/logout", registerController.logoutUserController);

module.exports = authRouter;