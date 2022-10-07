

//NPM
const bycript = require("bcryptjs");
const { handleHttpError } = require("../../utils/handleError");
const jwt = require("jsonwebtoken");

//Models
const { Users } = require("../users/users.model");


//controllers
const singUp = async (req, res,next) => {
  
  try {

    const { firstName, lastName, email, password } = req.body;

    const salt = await bycript.genSalt(10);
    const hashPassword = await bycript.hash(password, salt,);
    

    const user = await Users.findOne({
      where: {
        email,
      }
    })

    if (user) {
      return handleHttpError(res,"EMAIL_ALREADY_EXIST", 400)
    }

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashPassword,

    });

    newUser.password = undefined;

    //Email welcome

    res.status(201).json({
      status: "succes",
      newUser
    })

  } catch (err) {

    handleHttpError(res,"ERROR_CREATE_USERS",500)
  }
}

const login = async ( req, res,next ) => {

  const { email, password } = req.body;

  
  const user = await Users.findOne({
    where: {
      email,
      status:"active"
    }
  })

  if (!user) {
    return handleHttpError(res, "USER_&_PASSWORD ARE NOT VALID", 400);
  }

  const passOkay = await bycript.compare(password, user.password)
  
  if (!passOkay) {
    return handleHttpError(res, "USER_&_PASSWORD ARE NOT VALID", 400);
  }

  const token = jwt.sign(
      {
        id: user.id
      },
    "clavedeltoken",
      {
        expiresIn:"1d"
      }
  )

  res.status(200).json({
    token
  })


}


module.exports  = {singUp, login}