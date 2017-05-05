'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    user_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    image: DataTypes.STRING,
    seen: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    from: DataTypes.INTEGER
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