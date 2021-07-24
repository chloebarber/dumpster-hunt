'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('DiveSpots', [{ title: `Dumpster behind Stop & Shop`, address: `123 Fake Street`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Super safe, lots of dairy`},
      { title: `Trash can around the corner from Publix`, address: `124 Faux Ave`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1553058296-61093581de13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80`, description: `Their fine cheeses are to die for!`},
      { title: `Treasure next to Price Rite`, address: `125 Pseudo Drive`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1610942933121-9096428b5bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80`, description: `Plenty of day-old bread`},
      { title: `Secret stash in front of Wal-Mart`, address: `126 Not A Real Way`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1607536243899-57a307af22c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80`, description: `The freshest produce you'll find`},
      { title: `Dumpster ShopRite`, address: `127 Fake Parkway`, discoveredBy: `1`, imageUrl: `https://images.unsplash.com/photo-1552741957-4b321eb4acd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Friendly staff!`},
      { title: `Trash can behind Whole Foods`, address: `128 Faux Street`, discoveredBy: `20`, imageUrl: `https://images.unsplash.com/photo-1569898679447-52d64fb7cf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80`, description: `WARNING: management poisons this dumpster!`},
      { title: `Treasure around the corner from BJ's`, address: `129 Pseudo Ave`, discoveredBy: `13`, imageUrl: `https://images.unsplash.com/photo-1573512442972-37e2e878bdcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80`, description: `Super safe, lots of dairy`},
      { title: `Secret stash next to Costco`, address: `130 Not A Real Drive`, discoveredBy: `17`, imageUrl: `https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1918&q=80`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster in front of Shaw's`, address: `131 Fake Way`, discoveredBy: `9`, imageUrl: `https://images.unsplash.com/photo-1520373653313-0b8cde850e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80`, description: `Plenty of day-old bread`},
      { title: `Trash can Stop & Shop`, address: `132 Faux Parkway`, discoveredBy: `9`, imageUrl: `https://images.unsplash.com/photo-1610428578996-3f54c8f66398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80`, description: `The freshest produce you'll find`},
      { title: `Treasure behind Publix`, address: `133 Pseudo Street`, discoveredBy: `10`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Friendly staff!`},
      { title: `Secret stash around the corner from Price Rite`, address: `134 Not A Real Ave`, discoveredBy: `23`, imageUrl: `https://images.unsplash.com/photo-1553058296-61093581de13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=81`, description: `WARNING: management poisons this dumpster!`},
      { title: `Dumpster next to Wal-Mart`, address: `135 Fake Drive`, discoveredBy: `10`, imageUrl: `https://images.unsplash.com/photo-1610942933121-9096428b5bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=81`, description: `Super safe, lots of dairy`},
      { title: `Trash can in front of ShopRite`, address: `136 Faux Way`, discoveredBy: `6`, imageUrl: `https://images.unsplash.com/photo-1607536243899-57a307af22c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=81`, description: `Their fine cheeses are to die for!`},
      { title: `Treasure Whole Foods`, address: `137 Pseudo Parkway`, discoveredBy: `17`, imageUrl: `https://images.unsplash.com/photo-1552741957-4b321eb4acd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Plenty of day-old bread`},
      { title: `Secret stash behind BJ's`, address: `138 Not A Real Street`, discoveredBy: `18`, imageUrl: `https://images.unsplash.com/photo-1569898679447-52d64fb7cf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=81`, description: `The freshest produce you'll find`},
      { title: `Dumpster around the corner fromCostco`, address: `139 Fake Ave`, discoveredBy: `12`, imageUrl: `https://images.unsplash.com/photo-1573512442972-37e2e878bdcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=81`, description: `Friendly staff!`},
      { title: `Trash can next to Shaw's`, address: `140 Faux Drive`, discoveredBy: `13`, imageUrl: `https://images.unsplash.com/photo-1613199928741-1a757b32ffc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1918&q=81`, description: `WARNING: management poisons this dumpster!`},
      { title: `Treasure in front of Stop & Shop`, address: `141 Pseudo Way`, discoveredBy: `21`, imageUrl: `https://images.unsplash.com/photo-1520373653313-0b8cde850e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=81`, description: `Super safe, lots of dairy`},
      { title: `Secret stash Publix`, address: `142 Not A Real Parkway`, discoveredBy: `8`, imageUrl: `https://images.unsplash.com/photo-1610428578996-3f54c8f66398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=81`, description: `Their fine cheeses are to die for!`},
      { title: `Dumpster behind Price Rite`, address: `143 Fake Street`, discoveredBy: `10`, imageUrl: `https://images.unsplash.com/photo-1510251197878-a2e6d2cb590c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=82`, description: `Plenty of day-old bread`},      
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
