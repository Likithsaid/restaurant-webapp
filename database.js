const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurant_db',
    password: 'Teju@123',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};