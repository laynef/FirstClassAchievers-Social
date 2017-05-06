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
    colors: DataTypes.DataTypes.STRING,
    categories: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.hasMany(models.Order, {foreignKey: 'products'})
        Product.hasMany(models.Review, {foreignKey: 'to'})
        Product.belongsTo(models.Company, {foreignKey: 'products'})
      }
    }
  });
  return Product;
};