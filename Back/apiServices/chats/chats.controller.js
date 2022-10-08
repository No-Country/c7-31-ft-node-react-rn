const { Chats } = require('../../config/database')

const getChats = async (req, res, next) => {
  try {
    let allChats = await Chats.findAll({ attributes: ['name'] })
    res.json(allChats)
  } catch (error) {
    next(error)
  }
}

module.exports = { getChats }
