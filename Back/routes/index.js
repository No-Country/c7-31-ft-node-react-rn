const express = require("express");
const { authRouter } = require("../apiServices/auth/auth.routes");


const router = express.Router();

//Endpoints
router.use("/auth",authRouter )


module.exports = { router };