const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

// const sequelize = new Sequelize(
//   "freedb_learning_node_restAPIS",
//   "freedb_Zicky",
//   "Ks3ZVqQ@EYP&GgJ",
//   {
//     dialect: "mysql",
//     port: "3306",
//     host: "sql.freedb.tech",
//   }
// );

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: 3306,
  dialect: "mysql",
});

module.exports = sequelize;
