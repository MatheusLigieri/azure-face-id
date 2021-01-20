const { Pool, Client } = require('pg')
const connection = new Client({
    host: 'localhost',
    user: 'root',
    password: 'Tubar@01',
    port: 5432,
    database: 'face_id',
})
module.exports = connection