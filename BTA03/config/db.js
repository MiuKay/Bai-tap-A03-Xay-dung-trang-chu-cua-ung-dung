const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ncmobiletest', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,  // Tắt logging nếu không cần thiết
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL'))
    .catch(err => console.error('Unable to connect to MySQL:', err));

module.exports = sequelize;
