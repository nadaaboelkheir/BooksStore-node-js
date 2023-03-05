var { Pool } = require('pg')
require('dotenv').config()


const db_config = {
    host: 'localhost',
    user: 'database-user',
    max: 20,
    idleTimeoutMillis: 200,
    connectionTimeoutMillis: 300,
    connectionString: process.env.DATABASE_URL
}

const pool = new Pool(db_config)
pool.on('connect', (client) => {
    console.log('database is connected')
})
pool.on('remove', (client) => {
    console.log('database connection is removed')
})


module.exports = pool