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
    async index (req, res) {
        try {
            pool.getConnection((err, connection) => {

                const dateFrom = req.params.dateSelected
                const dateTo = req.params.dateSelected

                const start = moment(dateFrom).format('YYYY-MM-DD 00:00:00');
                const end = moment(dateTo).format('YYYY-MM-DD 23:59:59');

                connection.query('CALL getDashboardCollection(?, ?)', [start, end], (err, rows) => {
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
    async getReport (req, res) {
        try {
            pool.getConnection((err, connection) => {

                const { dateFrom, dateTo } = req.body

                const start = moment(dateFrom).format('YYYY-MM-DD 00:00:00');
                const end = moment(dateTo).format('YYYY-MM-DD 23:59:59');

                connection.query('CALL getRemittance(?, ?)', [start, end], (err, rows) => {
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