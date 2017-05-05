'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Testimonial, {foreignKey: 'user_id'})
        User.hasOne(models.Profile, {foreignKey: 'user_id'})
        User.hasMany(models.Message, {foreignKey: 'user_id'})
        User.hasOne(models.Following, {foreignKey: 'user_id'})
        User.hasOne(models.Favorite, {foreignKey: 'user_id'})
        User.hasMany(models.Notification, {foreignKey: 'user_id'})
      }
    }
  });
  return User;
};