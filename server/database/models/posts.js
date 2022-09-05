const Sequelize = require("sequelize");
const db = require("../database");

const Post = db.define("post", {
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  description: {
    type: Sequelize.STRING,
    defaultValue: "",
  },

  createdAt: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },

  isPublic: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Post;
