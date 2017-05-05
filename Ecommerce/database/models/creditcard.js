'use strict';
module.exports = function(sequelize, DataTypes) {
  var CreditCard = sequelize.define('CreditCard', {
    card_number: DataTypes.STRING,
    card_type: DataTypes.STRING,
    users_name: DataTypes.STRING,
    expire_month: DataTypes.STRING,
    expire_year: DataTypes.STRING,
    cvc: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CreditCard;
};