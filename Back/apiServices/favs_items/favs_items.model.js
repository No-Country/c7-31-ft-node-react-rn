const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('fav_item', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  })
}
