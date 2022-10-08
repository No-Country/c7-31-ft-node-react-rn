const {body, validationResult} = require('express-validator')
const { validateResults } = require("../../../utils/handleValidators");


const validatorLocals = [

    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({min: 3, max:15})
        .withMessage('Name must be between 3 and 15 characters long'),
    body('description')
        .notEmpty()
        .withMessage('Description is required')
        .isLength({min: 8, max: 50})
        .withMessage('Description must be between 8 and 50 characters long'),
    body('email')
        .isEmail()
        .notEmpty()
        .withMessage('Email is required'),
    body('avatar')
        .notEmpty()
        .withMessage('Avatar is required'),
    (req, res, next) => {
        return validateResults(req,res,next)
        }    
]

module.exports = {validatorLocals}