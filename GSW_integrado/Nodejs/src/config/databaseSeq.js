require('dotenv').config();

//Sequelize
module.exports = {
    // 'username': process.env.DATABASE_URL,
    // 'password': process.env.DATABASE_URL,
    // 'database': process.env.DATABASE_URL,
    // 'host': process.env.DATABASE_URL,
    'username': 'me',
    'password': 'password',
    'database': 'api',
    'host': 'localhost',
    dialect: 'postgres',
    define: {
        timestamp: true, // created_at, update_at
        underscored: true, //formato das tabelas snake case
    }
}