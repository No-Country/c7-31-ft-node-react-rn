const { Categories } = require('../../config/database')

const getCategories = async (req, res, next) => {
  try {
    let allCategories = await Categories.findAll({ attributes: ['name'] })
    res.json(allCategories)
  } catch (error) {
    next(error)
  }
}

module.exports = { getCategories }
