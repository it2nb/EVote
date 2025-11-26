import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('ptcvote', 'roost', '123456785', {
  host: 'localhost',
  dialect: 'mariadb'
});

export { sequelize } 