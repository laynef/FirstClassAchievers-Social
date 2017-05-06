'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    organization: DataTypes.STRING,
    products: DataTypes.ARRAY(DataTypes.INTEGER),
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Company.hasOne(models.Profile, {foreignKey: 'profile_id'})
        Company.hasMany(models.Product, {foreignKey: 'products'})
      }
    }
  });
  return Company;
};