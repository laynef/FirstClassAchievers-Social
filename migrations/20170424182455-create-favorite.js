
module.exports = {
	up: function(queryInterface, Sequelize) {
		return queryInterface.createTable('Favorites', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			entries: {
				type: Sequelize.ARRAY(Sequelize.INTEGER),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: function(queryInterface, Sequelize) {
		return queryInterface.dropTable('Favorites');
	},
};
