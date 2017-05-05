'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define('Favorites', {
    products: DataTypes.ARRAY(DataTypes.INTEGER),
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Favorites.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Favorites;
};