const express = require("express");
const cors = require("cors");

const { router } = require("./routes");
const { json } = require("express");

// Init express

const app = express();

//Api config;
app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));



//Index Router

app.use("/api/v1", router);


module.exports = { app }