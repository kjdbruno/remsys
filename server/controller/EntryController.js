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

                if (err) throw err

                console.log('connected as id ' + connection.threadId)

                const dateFrom = req.params.date
                const dateTo = req.params.date

                const start = moment(dateFrom).format('YYYY-MM-DD 00:00:00');
                const end = moment(dateTo).format('YYYY-MM-DD 23:59:59');

                connection.query('CALL getCollection(?, ?)', [start, end], (err, rows) => {

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
    async post (req, res) {
        try {
            pool.getConnection((err, connection) => {

                const { date, collectorId, itemId, amount } = req.body

                const dateRemittance = moment(date).format('YYYY-MM-DD 08:00:00');
                const createdAt = new Date()
                const updatedAt = new Date()

                if (date == null || collectorId == null || itemId == null || amount == null) {
                    res.status(400).send({
                        error: "All fields are required"
                    })
                } else if (amount<=0) {
                    res.status(400).send({
                        error: "Please enter valid amount"
                    })
                } else {
                    connection.query('CALL createRemittance(?, ?, ?, ?, ?, ?)', [dateRemittance, collectorId, itemId, amount, createdAt, updatedAt], (err, rows) => {
                        connection.release() // return the connection to pool
                        if (!err) {
                            res.send(`New record has been added.`)
                        } else {
                            console.log(err)
                        }
                        console.log(req.body)
    
                    })
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    async delete (req, res) {
        try {
            pool.getConnection((err, connection) => {

                connection.query('CALL removeRemittance(?)', [req.params.id], (err, rows) => {
                    connection.release() // return the connection to pool
                    if (!err) {
                        res.send(`Record has been removed.`)
                    } else {
                        console.log(err)
                    }
                    console.log(req.body)

                })

            })
        } catch (error) {
            console.log(error)
        }
    }
}