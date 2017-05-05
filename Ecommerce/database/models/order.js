'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    products: DataTypes.ARRAY,
    status: DataTypes.STRING,
    total: DataTypes.DOUBLE,
    to: DataTypes.INTEGER,
    shipping: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};