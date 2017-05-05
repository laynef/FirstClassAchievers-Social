'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    seen: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    from: DataTypes.INTEGER,
    image: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Notification.belongsTo(models.User, {foreignKey: 'user_id'})
      }
    }
  });
  return Notification;
};