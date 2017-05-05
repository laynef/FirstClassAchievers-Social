'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CreditCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_number: {
        type: Sequelize.STRING
      },
      card_type: {
        type: Sequelize.STRING
      },
      users_name: {
        type: Sequelize.STRING
      },
      expire_month: {
        type: Sequelize.STRING
      },
      expire_year: {
        type: Sequelize.STRING
      },
      cvc: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CreditCards');
  }
};