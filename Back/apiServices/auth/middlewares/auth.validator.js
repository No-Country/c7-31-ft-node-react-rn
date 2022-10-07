const { body, validationResult } = require("express-validator");
const { validateResults } = require("../../../utils/handleValidators");


const signUpValidator = [

  body("firstName")
    .notEmpty()
    .withMessage("username can not be empty"),
  body("lastName")
    .notEmpty()
    .withMessage("lastName can not be empty"),
  body("email")
    .notEmpty()
    .withMessage("must provide a valid email"),
  body("password")
    .notEmpty()
    .isAlphanumeric()
    .withMessage("password must contain letters and numbers")
    .isLength({ min: 8 }).withMessage("password must be at least 8 characters long"),
  //validate result
  (req, res, next) => {
    return validateResults(req,res,next)
  }
]


module.exports = { signUpValidator }