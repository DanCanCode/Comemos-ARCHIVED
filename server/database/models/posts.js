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
});

module.exports = Post;
