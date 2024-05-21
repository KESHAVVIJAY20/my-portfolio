const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require("../utils/sequelize");

const Contact = sequelize.define("contacts",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  usermail: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  message: {
      type: DataTypes.STRING(1024),
      defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
  },
});

// Sync the model with the database (create the table if it doesn't exist)
(async () => {
await sequelize.sync();
console.log("contact model synced with database");
})();

module.exports =Contact;