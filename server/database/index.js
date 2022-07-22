const db = require("./database");
const User = require("./models/users");
const Post = require("./models/posts");

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  db,
  User,
  Post,
};
