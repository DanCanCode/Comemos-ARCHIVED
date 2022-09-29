const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  fullName: {
    type: Sequelize.STRING(),
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

  email: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },

  numOfPosts: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  following: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  followers: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
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
