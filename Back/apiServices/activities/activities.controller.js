const { Activities } = require('../../config/database')

const getActivities = async (req, res, next) => {
  try {
    let allActivities = await Activities.findAll({ attributes: ['name'] })
    res.json(allActivities)
  } catch (error) {
    next(error)
  }
}

module.exports = { getActivities }
