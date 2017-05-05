'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    goals: DataTypes.TEXT,
    position: DataTypes.STRING,
    nickname: DataTypes.STRING,
    image: DataTypes.TEXT,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Profile.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Profile;
};