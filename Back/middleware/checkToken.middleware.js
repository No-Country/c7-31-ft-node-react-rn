const { handleHttpError } = require("../utils/handleError");
const jwt = require('jsonwebtoken');
const { Users } = require("../apiServices/users/users.model");



const checkToken = async (req, res, next) => {
  
  try {

    let token = undefined;
   
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401);
    }

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ").pop();
    } 

     //ERROR AL PASAR MAS DE 2 VECES TOKEN SIN EL POST MAN TA VACIO
    const decoded = await jwt.verify(
      token,
      "clavedeltoken" // pasar a dotenv
    )
   
    const userActive = await Users.findOne({
      where: {
        id: decoded.id,
        status:"active"
      }
    })

    if (!userActive) {
      handleHttpError(res,"USER_NOT_EXIST",403)
    }

    req.userActive = userActive;
   
    next();

  } catch (error) {
    handleHttpError(res, "ERROR_CHECKTOKEN", 500);
  }
}

module.exports = {checkToken}