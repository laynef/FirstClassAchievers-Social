'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    products: DataTypes.ARRAY(DataTypes.INTEGER),
    status: DataTypes.STRING,
    total: DataTypes.DOUBLE,
    to: DataTypes.INTEGER,
    shipping: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Order.belongsTo(models.User, {foreignKey: 'user_id'})
        Order.belongsTo(models.Product, {foreignKey: 'products'})
      }
    }
  });
  return Order;
};