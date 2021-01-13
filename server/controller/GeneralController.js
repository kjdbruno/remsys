const mysql = require('mysql')
const dotenv = require('dotenv')
const moment = require('moment')
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

module.exports = {
    async getCollector (req, res) {
        try {
            pool.getConnection((err, connection) => {

                if (err) throw err

                console.log('connected as id ' + connection.threadId)

                connection.query('CALL getCollector()', (err, rows) => {

                    connection.release() // return the connection to pool

                    if (!err) {
                        // create payload
                        res.json(rows)
                        console.log(rows)
                    } else {
                        console.log(err)
                    }
                })
            })
        } catch (error) {
            console.log(error)
        }
    },
    async getItem (req, res) {
        try {
            pool.getConnection((err, connection) => {

                if (err) throw err

                console.log('connected as id ' + connection.threadId)

                connection.query('CALL getItem()', (err, rows) => {

                    connection.release() // return the connection to pool

                    if (!err) {
                        // create payload
                        res.json(rows)
                        console.log(rows)
                    } else {
                        console.log(err)
                    }
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
}