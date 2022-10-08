const { Favs_lists } = require('../../config/database')

const getFavsLists = async (req, res, next) => {
  try {
    let allFavsLists = await Favs_lists.findAll({ attributes: ['name'] })
    res.json(allFavsLists)
  } catch (error) {
    next(error)
  }
}

module.exports = { getFavsLists }
