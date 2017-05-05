'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    billing_street: DataTypes.STRING,
    billing_city: DataTypes.STRING,
    billing_zip: DataTypes.STRING,
    billing_country: DataTypes.STRING,
    shipping_street: DataTypes.STRING,
    shipping_city: DataTypes.STRING,
    shipping_zip: DataTypes.STRING,
    shipping_country: DataTypes.STRING,
    credit_cards: DataTypes.ARRAY,
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Profile;
};