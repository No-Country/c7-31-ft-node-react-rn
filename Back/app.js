const express = require("express");
const cors = require("cors");

const { router } = require("./routes");
const { json } = require("express");
const { handleHttpError } = require("./utils/handleError");

// Init express

const app = express();

//Api config;
app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));



//Index Router

app.use("/api/v1", router);




// Error endpoint not found 
app.all('*',(req,res,next) => {
  handleHttpError(res,`${req.method} ${req.url} not found in this server`,404)
})

module.exports = { app }