const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ptcvote', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mariadb'
});

export { sequelize } 