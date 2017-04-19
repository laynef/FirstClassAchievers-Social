'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING,
    goals: DataTypes.TEXT,
    position: DataTypes.STRING,
    nickname: DataTypes.STRING,
    image: DataTypes.TEXT,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Profile.belongsTo(models.User, {foreignKey: 'profileId', as: 'user'})
      }
    }
  });
  return Profile;
};