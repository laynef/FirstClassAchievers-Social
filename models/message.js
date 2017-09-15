
module.exports = function(sequelize, DataTypes) {
	var Message = sequelize.define('Message', {
		room_name: DataTypes.STRING,
		user_id: DataTypes.INTEGER,
		to: DataTypes.INTEGER,
		message: DataTypes.TEXT,
	}, {
		classMethods: {
			associate: function(models) {
				// associations can be defined here
				Message.belongsTo(models.User, {foreignKey: 'user_id'});
			},
		},
	});
	return Message;
};
