'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coupon = sequelize.define('Coupon', {
    code: DataTypes.STRING,
    amount: DataTypes.DOUBLE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Coupon;
};