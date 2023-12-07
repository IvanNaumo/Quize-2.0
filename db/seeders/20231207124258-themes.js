'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
     await queryInterface.bulkInsert('Themes', [{
        name: 'Флаги стран',
        img: 'https://www.toys-land.ru/img/goods/large/l2-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    {
      name: 'Сладкая ностальгия',
      img: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/577/49b/68e564510cb7a7ae48e014855b.jpg',
      createdAt: new Date(),
      updatedAt: new Date(), 
    },
    {
      name: 'Золотая эра консольных игр',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanwpgYUPC5372MB639IpUjXMsnb6TaVLfPQ&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(), 
    },], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Themes', null, {});
     
  }
};
