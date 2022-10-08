const { Reviews } = require('../../config/database')

const getReviews = async (req, res, next) => {
  try {
    let allReviews = await Reviews.findAll({ attributes: ['name'] })
    res.json(allReviews)
  } catch (error) {
    next(error)
  }
}

module.exports = { getReviews }
