const { DataTypes } = require('sequelize')

// Tiene que estar relacionada a un USER y a un LOCAL, cada REVIEW tiene UN user y UN local, cada uno de esos tiene MUCHAS reviews

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(1500), // ToDo ¿dejamos con texto y después lo cambiamos a un ENUM, tipo PedidosYa?
      allowNull: true
    },
  })
}

