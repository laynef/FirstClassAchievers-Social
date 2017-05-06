'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    post_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    likes: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Testimonial, {foreignKey: 'post_id'})
        Comment.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Comment;
};