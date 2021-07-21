'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DiveSpots', [{ title: `Dumpster behind Stop & Shop`, discoveredBy: `1`, imageUrl: `./images/demo_dumpster.jpg`, description: `Super safe, lots of dairy`},
      { title: `Dumpster behind Publix`, discoveredBy: `1`, imageUrl: `./images/dumpster_img_1.jpg`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `1`, imageUrl: `./images/dumpster_img_2.jpg`, description: `Plenty of day-old bread`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `1`, imageUrl: `./images/dumpster_img_3.jpg`, description: `The freshest produce you'll find`},
      { title: `ShopRite`, discoveredBy: `1`, imageUrl: `./images/dumpster_img_4.jpg`, description: `Friendly staff!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `4`, imageUrl: `./images/dumpster_img_5.jpg`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster behind Publix`, discoveredBy: `6`, imageUrl: `./images/dumpster_img_6.jpg`, description: `Super safe, lots of dairy`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `23`, imageUrl: `./images/dumpster_img_7.jpg`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `7`, imageUrl: `./images/dumpster_img_8.jpg`, description: `Plenty of day-old bread`},
      { title: `ShopRite`, discoveredBy: `8`, imageUrl: `./images/dumpster_img_9.jpg`, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `3`, imageUrl: `./images/dumpster_img_10.jpg`, description: `Friendly staff!`},
      { title: `Dumpster behind Publix`, discoveredBy: `16`, imageUrl: `./images/demo_dumpster.jpg`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `13`, imageUrl: `./images/dumpster_img_1.jpg`, description: `Super safe, lots of dairy`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `2`, imageUrl: `./images/dumpster_img_2.jpg`, description: `Their fine cheeses are to die for!`},
      { title: `ShopRite`, discoveredBy: `13`, imageUrl: `./images/dumpster_img_3.jpg`, description: `Plenty of day-old bread`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `12`, imageUrl: `./images/dumpster_img_4.jpg`, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Publix`, discoveredBy: `2`, imageUrl: `./images/dumpster_img_5.jpg`, description: `Friendly staff!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `18`, imageUrl: `./images/dumpster_img_6.jpg`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `5`, imageUrl: `./images/dumpster_img_7.jpg`, description: `Super safe, lots of dairy`},
      { title: `ShopRite`, discoveredBy: `18`, imageUrl: `./images/dumpster_img_8.jpg`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `5`, imageUrl: `./images/dumpster_img_9.jpg`, description: `Plenty of day-old bread`}      
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
