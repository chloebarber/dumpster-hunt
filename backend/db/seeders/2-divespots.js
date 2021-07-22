'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DiveSpots', [{ title: `Dumpster behind Stop & Shop`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Super safe, lots of dairy`},
      { title: `Dumpster behind Publix`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1553058296-61093581de13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1610942933121-9096428b5bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80`, description: `Plenty of day-old bread`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1607536243899-57a307af22c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80`, description: `The freshest produce you'll find`},
      { title: `ShopRite`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1552741957-4b321eb4acd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Friendly staff!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `14`, imageUrl: `https://images.unsplash.com/photo-1569898679447-52d64fb7cf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster behind Publix`, discoveredBy: `19`, imageUrl: `https://images.unsplash.com/photo-1573512442972-37e2e878bdcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80`, description: `Super safe, lots of dairy`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `23`, imageUrl: `https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1918&q=80`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `18`, imageUrl: `https://images.unsplash.com/photo-1520373653313-0b8cde850e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Plenty of day-old bread`},
      { title: `ShopRite`, discoveredBy: `14`, imageUrl: `https://images.unsplash.com/photo-1610428578996-3f54c8f66398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80`, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `10`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Friendly staff!`},
      { title: `Dumpster behind Publix`, discoveredBy: `15`, imageUrl: `https://images.unsplash.com/photo-1553058296-61093581de13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=81`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `14`, imageUrl: `https://images.unsplash.com/photo-1610942933121-9096428b5bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=81`, description: `Super safe, lots of dairy`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `11`, imageUrl: `https://images.unsplash.com/photo-1607536243899-57a307af22c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=81`, description: `Their fine cheeses are to die for!`},
      { title: `ShopRite`, discoveredBy: `16`, imageUrl: `https://images.unsplash.com/photo-1552741957-4b321eb4acd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Plenty of day-old bread`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `4`, imageUrl: `https://images.unsplash.com/photo-1569898679447-52d64fb7cf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=81`, description: `The freshest produce you'll find`},
      { title: `Dumpster behind Publix`, discoveredBy: `7`, imageUrl: `https://images.unsplash.com/photo-1573512442972-37e2e878bdcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=81`, description: `Friendly staff!`},
      { title: `Dumpster around the corner from Price Rite`, discoveredBy: `5`, imageUrl: `https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1918&q=81`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster near Wal-Mart`, discoveredBy: `12`, imageUrl: `https://images.unsplash.com/photo-1520373653313-0b8cde850e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Super safe, lots of dairy`},
      { title: `ShopRite`, discoveredBy: `8`, imageUrl: `https://images.unsplash.com/photo-1610428578996-3f54c8f66398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=81`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster behind Stop & Shop`, discoveredBy: `2`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=82`, description: `Plenty of day-old bread`}      
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
