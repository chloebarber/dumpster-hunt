'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [{ userId: `1`, spotId: `1`, content: `very goood, I like`},
      { userId: `1`, spotId: `4`, content: `nom nom nom`},
      { userId: `1`, spotId: `1`, content: `I got in trouble here`},
      { userId: `1`, spotId: `3`, content: `check out this sweet score I got!`},
      { userId: `8`, spotId: `5`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `22`, spotId: `14`, content: `it was too crowded here`},
      { userId: `23`, spotId: `12`, content: `very goood, I like`},
      { userId: `2`, spotId: `15`, content: `nom nom nom`},
      { userId: `19`, spotId: `10`, content: `I got in trouble here`},
      { userId: `11`, spotId: `11`, content: `check out this sweet score I got!`},
      { userId: `9`, spotId: `12`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `19`, spotId: `10`, content: `it was too crowded here`},
      { userId: `8`, spotId: `4`, content: `very goood, I like`},
      { userId: `19`, spotId: `13`, content: `nom nom nom`},
      { userId: `18`, spotId: `6`, content: `I got in trouble here`},
      { userId: `3`, spotId: `2`, content: `check out this sweet score I got!`},
      { userId: `11`, spotId: `18`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `2`, spotId: `9`, content: `it was too crowded here`},
      { userId: `11`, spotId: `3`, content: `very goood, I like`},
      { userId: `21`, spotId: `21`, content: `nom nom nom`},
      { userId: `1`, spotId: `6`, content: `I got in trouble here`},
      { userId: `16`, spotId: `10`, content: `check out this sweet score I got!`},
      { userId: `21`, spotId: `15`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `8`, spotId: `1`, content: `it was too crowded here`},
      { userId: `2`, spotId: `19`, content: `very goood, I like`},
      { userId: `4`, spotId: `19`, content: `nom nom nom`},
      { userId: `9`, spotId: `19`, content: `very goood, I like`},
      { userId: `18`, spotId: `21`, content: `nom nom nom`},
      { userId: `3`, spotId: `12`, content: `I got in trouble here`},
      { userId: `9`, spotId: `16`, content: `check out this sweet score I got!`},
      { userId: `23`, spotId: `17`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `16`, spotId: `1`, content: `it was too crowded here`},
      { userId: `10`, spotId: `13`, content: `very goood, I like`},
      { userId: `8`, spotId: `7`, content: `nom nom nom`},
      { userId: `18`, spotId: `4`, content: `I got in trouble here`},
      { userId: `9`, spotId: `7`, content: `check out this sweet score I got!`},
      { userId: `23`, spotId: `11`, content: `warning, this place isn't as safe as it used to be`},
      { userId: `3`, spotId: `5`, content: `it was too crowded here`},
      { userId: `16`, spotId: `15`, content: `very goood, I like`},
      { userId: `22`, spotId: `9`, content: `nom nom nom`},
      { userId: `5`, spotId: `12`, content: `I got in trouble here`},
      { userId: `12`, spotId: `4`, content: `check out this sweet score I got!`}
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
