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
        User.hasMany(models.Notification, {foreignKey: 'user_id'})
        User.hasMany(models.Review, {foreignKey: 'who'})
        User.hasOne(models.Profile, {foreignKey: 'user_id'})
        User.hasMany(models.Favorites, {foreignKey: 'user_id'})
        User.hasMany(models.Order, {foreignKey: 'user_id'})
      }
    }
  });
  return User;
};