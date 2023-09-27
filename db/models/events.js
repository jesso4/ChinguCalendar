const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  startTime: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  endTime: {
    type: Sequelize.TIME,
    allowNull: true,
  },
  people: {
    type: Sequelize.TEXT,
    defaultValue: '',
  },  
  location: {
    type: Sequelize.TEXT,
    defaultValue: '',
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: '',
  },
});

module.exports = Event;
