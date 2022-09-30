const express = require("express");
const { singUp, login } = require("./auth.controller");



const authRouter = express.Router();

authRouter.post("/signup", singUp)
authRouter.post("/login", login)


module.exports = { authRouter };