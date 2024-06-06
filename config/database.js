
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'entronica_test'
});

// db.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Connected to the database');
//   });
  
module.exports = sequelize;