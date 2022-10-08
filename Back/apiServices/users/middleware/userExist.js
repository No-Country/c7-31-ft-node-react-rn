const { Users } = require("../users.model");

//Utils
const {handleHttpError } = require("../../../utils/handleError");

const userExist = async (req, res, next) => {
  

  try {

    const { id } = req.params;

    const user = await Users.findOne({
      where: {
        id,
        status:"active"
      }
    })

    if (!user) {
      handleHttpError(res,"USER_DONT_EXIST",404)
    }
    req.user = user;
    next();
    
  } catch (error) {
    handleHttpError(res,"ERROR_USEREXIST",500)
  }

 

 


 
}

module.exports = {userExist}