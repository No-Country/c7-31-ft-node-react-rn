const express = require('express')

//Controllers

const {
  updateName,
  updateEmail,
  updatePassword
} = require('./users.controller')


//Middlewares
const { checkToken } = require('../../middleware/checkToken.middleware')
const { userExist } = require('./middleware/userExist')
const { userAccount } = require('../../middleware/userAcc.middleware')
const { isEmail, isNameOkay, isPassword } = require('./middleware/user.validator')



const usersRouter = express.Router()


usersRouter.put("/:id/update-name",
  userExist,
  checkToken,
  userAccount,
  isNameOkay,
  updateName
)

usersRouter.put("/:id/update-email",
  userExist,
  checkToken,
  userAccount,
  isEmail,
  updateEmail
)

usersRouter.put("/:id/update-password",
  userExist,
  checkToken,
  userAccount,
  isPassword,
  updatePassword
)



module.exports = {usersRouter}