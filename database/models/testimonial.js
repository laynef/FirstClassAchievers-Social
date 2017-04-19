'use strict';
module.exports = function(sequelize, DataTypes) {
  var Testimonial = sequelize.define('Testimonial', {
    author: DataTypes.STRING,
    message: DataTypes.TEXT,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Testimonial.belongsTo(models.User, {foreignKey: 'userId', as: 'testimonial'})
      }
    }
  });
  return Testimonial;
};