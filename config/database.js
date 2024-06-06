
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('entronica_test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// db.connect((err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Connected to the database');
//   });
  
module.exports = sequelize;