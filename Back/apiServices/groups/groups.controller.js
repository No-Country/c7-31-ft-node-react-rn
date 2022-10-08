const { Groups } = require('../../config/database')

const getGroups = async (req, res, next) => {
  try {
    let allGroups = await Groups.findAll({ attributes: ['name'] })
    res.json(allGroups)
  } catch (error) {
    next(error)
  }
}

module.exports = { getGroups }
