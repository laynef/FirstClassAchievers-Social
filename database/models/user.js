'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Testimonial, {foreignKey: 'id'})
        User.hasOne(models.Profile, {foreignKey: 'id'})
      }
    }
  });
  return User;
};