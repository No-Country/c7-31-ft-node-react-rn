const { DataTypes } = require('sequelize')
const {db} = require('../../config/database')

const Locals = db.define('local', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1500), // ToDo ¿longitud?
      allowNull: false
    },
    email: { // de contacto
      type: DataTypes.STRING,
      allowNull: false
      // ToDo validación de mail
    },
    avatar: {
      type: DataTypes.STRING, // es una Img
      allowNull: false
    },    
  })


module.exports = {Locals}
