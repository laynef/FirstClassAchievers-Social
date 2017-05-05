'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      billing_street: {
        type: Sequelize.STRING
      },
      billing_city: {
        type: Sequelize.STRING
      },
      billing_zip: {
        type: Sequelize.STRING
      },
      billing_country: {
        type: Sequelize.STRING
      },
      shipping_street: {
        type: Sequelize.STRING
      },
      shipping_city: {
        type: Sequelize.STRING
      },
      shipping_zip: {
        type: Sequelize.STRING
      },
      shipping_country: {
        type: Sequelize.STRING
      },
      credit_cards: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      phone: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Profiles');
  }
};