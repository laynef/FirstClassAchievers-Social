'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define('Favorite', {
    user_id: DataTypes.INTEGER,
    entries: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Favorite.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Favorite;
};