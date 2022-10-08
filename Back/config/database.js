const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });



const db = new Sequelize({
  
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB,
  logging: false,
  dialectOptions:
  process.env.NODE_ENV ==='production'
      ? {
         ssl: {
             required:true,
             rejectUnauthorized:false,
         }
        }
     : {},
})


const connectDB = () => {

  db.authenticate()
    .then(() => console.log("db auth"))
    .catch(err => console.log(err));
  
  db.sync()
    .then(() => console.log("db sync"))
    .catch(err => console.log(err));
}

module.exports = { connectDB, db }