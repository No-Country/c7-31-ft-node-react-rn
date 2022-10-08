const { Messages } = require('../../config/database')

const getMessages = async (req, res, next) => {
  try {
    let allMessages = await Messages.findAll({ attributes: ['name'] })
    res.json(allMessages)
  } catch (error) {
    next(error)
  }
}

module.exports = { getMessages }
