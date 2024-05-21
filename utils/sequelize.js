const { Sequelize } = require("sequelize");
require("dotenv").config();
const path = require("path");

let parentDir = path.resolve(__dirname, "..");
const sequelize = new Sequelize({
  ...require(path.join(parentDir, "config", "config.json"))[
    process.env.NODE_ENV || "development"
  ],
  logging: false,
});

module.exports = sequelize;