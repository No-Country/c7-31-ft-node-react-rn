const { Users } = require("../apiServices/users/users.model");
const { Locals } = require('../apiServices/locals/locals.model')


const Models = {
 
  users: Users,
  locals: Locals
}

module.exports = { Models }