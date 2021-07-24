'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {username: `Demo Possum`, email: `demo@demo.com`, hashedPassword: 'demoUserPassword'},
{username: `Possum 1`, email: `possum1@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 2`, email: `possum2@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 3`, email: `possum3@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 4`, email: `possum4@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 5`, email: `possum5@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 6`, email: `possum6@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 7`, email: `possum7@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 8`, email: `possum8@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 9`, email: `possum9@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 10`, email: `possum10@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 11`, email: `possum11@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 12`, email: `possum12@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 13`, email: `possum13@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 14`, email: `possum14@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 15`, email: `possum15@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 16`, email: `possum16@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 17`, email: `possum17@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 18`, email: `possum18@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 19`, email: `possum19@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 20`, email: `possum20@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 21`, email: `possum21@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 22`, email: `possum22@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
{username: `Possum 23`, email: `possum23@trash.com`, hashedPassword: bcrypt.hashSync(faker.internet.password())},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};