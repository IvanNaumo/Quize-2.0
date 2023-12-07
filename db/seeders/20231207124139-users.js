'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Siroga',
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pasha',
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
   
      await queryInterface.bulkDelete('Users', null, {});
     
  },
};
