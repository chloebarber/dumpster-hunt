'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DiveSpots', [{ title: `Dumpster behind Stop & Shop`, discoveredBy: `1`, imageUrl: ``, description: `Super safe, lots of dairy`},
      { title: `Dumpster behind Publix`, discoveredBy: `1`, imageUrl: ``, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `1`, imageUrl: ``, description: `Plenty of day-old bread`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `1`, imageUrl: ``, description: `The freshest produce you'll find`},
      { title: `ShopRite`, discoveredBy: `1`, imageUrl: ``, description: `Friendly staff!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `19`, imageUrl: ``, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster behind Publix`, discoveredBy: `15`, imageUrl: ``, description: `Super safe, lots of dairy`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `5`, imageUrl: ``, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `5`, imageUrl: ``, description: `Plenty of day-old bread`},
      { title: `ShopRite`, discoveredBy: `8`, imageUrl: ``, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `13`, imageUrl: ``, description: `Friendly staff!`},
      { title: `Dumpster behind Publix`, discoveredBy: `6`, imageUrl: ``, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `18`, imageUrl: ``, description: `Super safe, lots of dairy`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `8`, imageUrl: ``, description: `Their fine cheeses are to die for!`},
      { title: `ShopRite`, discoveredBy: `16`, imageUrl: ``, description: `Plenty of day-old bread`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `22`, imageUrl: ``, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Publix`, discoveredBy: `15`, imageUrl: ``, description: `Friendly staff!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `13`, imageUrl: ``, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `21`, imageUrl: ``, description: `Super safe, lots of dairy`},
      { title: `ShopRite`, discoveredBy: `14`, imageUrl: ``, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `15`, imageUrl: ``, description: `Plenty of day-old bread`}
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
