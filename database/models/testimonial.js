'use strict';
module.exports = function(sequelize, DataTypes) {
  var Testimonial = sequelize.define('Testimonial', {
    author: DataTypes.STRING,
    message: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Testimonial.belongsTo(models.User, {foreignKey: 'user_id'})
        Testimonial.hasMany(models.Comment, {foreignKey: 'post_id'})
      }
    }
  });
  return Testimonial;
};