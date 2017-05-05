'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    sizes: DataTypes.ARRAY(DataTypes.STRING),
    details: DataTypes.TEXT,
    images: DataTypes.ARRAY(DataTypes.STRING),
    colors: DataTypes.ARRAY(DataTypes.STRING),
    categories: DataTypes.ARRAY(DataTypes.STRING),
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    quality: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.hasMany(models.Order, {foreignKey: 'products'})
        Product.hasMany(models.Review, {foreignKey: 'to'})
      }
    }
  });
  return Product;
};