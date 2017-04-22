'use strict';
module.exports = function(sequelize, DataTypes) {
  var Following = sequelize.define('Following', {
    user_id: DataTypes.INTEGER,
    followers: DataTypes.ARRAY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Following;
};