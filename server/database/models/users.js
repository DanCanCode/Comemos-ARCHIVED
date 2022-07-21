const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("User", {
  email: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  username: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  bio: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  profilePic: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = User;
