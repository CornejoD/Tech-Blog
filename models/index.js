const Post = require("./post");
const User = require("./user");


Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Post, User };