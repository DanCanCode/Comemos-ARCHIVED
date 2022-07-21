const Sequelize = require("sequelize");
const db = require("../database");

const Post = db.define("Post", {
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  likes: {
    type: Sequelize.NUMBER,
    defaultValue: 0,
  },

  description: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = Post;
