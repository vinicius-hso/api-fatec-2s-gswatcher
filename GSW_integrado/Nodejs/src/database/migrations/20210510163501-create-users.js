'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
      name : {
        type: Sequelize.STRING,
        allowNull: false
    },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        lowercase: true
    },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
     updated_at: {
        type: Sequelize.DATE,
        allowNull: false
    }
  });
},
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};


// sequelize db:migrate      - no terminal // usado para migrar as tabelas para o database