// db.js
const mysql = require('mysql2');

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'C@rrombo@rd2',
  database: 'maanytm',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
