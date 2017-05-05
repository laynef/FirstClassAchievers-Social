'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    sizes: DataTypes.ARRAY,
    details: DataTypes.TEXT,
    images: DataTypes.ARRAY,
    colors: DataTypes.ARRAY,
    categories: DataTypes.ARRAY,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    quality: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};