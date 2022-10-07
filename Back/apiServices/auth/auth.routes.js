const express = require("express");
const { singUp, login } = require("./auth.controller");
const { signUpValidator } = require("./middlewares/auth.validator");



const authRouter = express.Router();

authRouter.post("/sign-up",signUpValidator, singUp)
authRouter.post("/login", login)


module.exports = { authRouter };