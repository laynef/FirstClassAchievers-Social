'use strict';
module.exports = function(sequelize, DataTypes) {
  var Following = sequelize.define('Following', {
    user_id: DataTypes.INTEGER,
    followers: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Following.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Following;
};