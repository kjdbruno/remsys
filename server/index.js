const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

require('./routes')(app)

app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`))
