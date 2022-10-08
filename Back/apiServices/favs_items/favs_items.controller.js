const { Favs_items } = require('../../config/database')

const getFavsItems = async (req, res, next) => {
  try {
    let allFavsItem = await Favs_items.findAll({ attributes: ['name'] })
    res.json(allFavsItem)
  } catch (error) {
    next(error)
  }
}

module.exports = { getFavsItems }
