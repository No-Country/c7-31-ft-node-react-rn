const db = require('./locals.model')
const { handleHttpError } = require("../../utils/handleError")

const getActivities = async (req, res, next) => {
  try {
    let allActivities = await db.Activities.findAll({ attributes: ['name'] })
    res.json(allActivities)
  } catch (error) {
    handleHttpError(res,"ERROR_GET_ACTIVITIES",404)
  }
}

module.exports = { getActivities }
