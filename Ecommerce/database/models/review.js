'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    rate: DataTypes.DOUBLE,
    message: DataTypes.TEXT,
    who: DataTypes.INTEGER,
    to: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Review;
};