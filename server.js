require('dotenv').config()

const express = require('express')
const app = express()
const  mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const bookingRouter = require('./routes/booking')
app.use('/booking', bookingRouter)

app.listen(3000, () => console.log('Server running on localhost:3000/booking'))