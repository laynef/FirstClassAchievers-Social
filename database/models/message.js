'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    user_id: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Message.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Message;
};