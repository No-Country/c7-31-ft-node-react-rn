const { Reservations } = require('../../config/database')

const getReservations = async (req, res, next) => {
  try {
    let allReservations = await Reservations.findAll({ attributes: ['name'] })
    res.json(allReservations)
  } catch (error) {
    next(error)
  }
}

module.exports = { getReservations }
