const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/chingu_calendar", {
  logging: false,
});

module.exports = db;
