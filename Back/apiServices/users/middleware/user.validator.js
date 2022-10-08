const { body, validationResult } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidators");


const checkResults = () => {
  (req, res, next) => {
    return validateResults(req,res,next)
  }
}


const isEmail = [
  body("email").notEmpty().isEmail()
    .withMessage("must provide a valid email"),
  
  (req, res, next) => {
    return validateResults(req,res,next)
  }
]

const isNameOkay = [
  body("firstName")
  .notEmpty()
  .withMessage("username can not be empty"),
  body("lastName")
  .notEmpty()
    .withMessage("lastName can not be empty"),
  
  (req, res, next) => {
    return validateResults(req,res,next)
  }
]

const isPassword = [
  body("password")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("password must contain letters and numbers")
    .isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),
  
    (req, res, next) => {
      return validateResults(req,res,next)
    }
]

module.exports ={isEmail, isNameOkay,isPassword}