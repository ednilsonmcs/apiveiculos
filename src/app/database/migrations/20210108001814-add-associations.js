'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'modelo',
      'marca_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'marca',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'modelo',
      'marca_id'
    );
  }
};
