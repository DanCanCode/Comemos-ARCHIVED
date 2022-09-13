const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  email: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  profilePic: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  bio: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = User;
