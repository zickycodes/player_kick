const sequelize = require("../database");
const { Sequelize, DataTypes } = require("sequelize");

const Info = sequelize.define("Info", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Info;
