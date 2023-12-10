const sequelize = require("../database");
const { Sequelize, DataTypes } = require("sequelize");

const Player = sequelize.define("Player", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nationality: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  foot: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  current_club: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  contract_expires: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  current_salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  picture_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Player;
