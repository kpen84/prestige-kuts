require('dotenv').config()
const express = require('express')
const app = express()
const  mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/book.html')
})

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const bookingRouter = require('./routes/book')
app.use('/book', bookingRouter)

const { Schema } = mongoose;

const bookingSchema = new Schema({
  barber: String,
  customer: String,
  apptype: String,
  date: Date,
});

const booking = mongoose.model('book', bookingSchema);

app.post('/', (req, res) => {
    const bookingData = req.body;
  
    const newBooking = new booking({
      barber: bookingData.barber,
      customer: bookingData.customer,
      email: bookingData.email,
      apptype: bookingData.apptype,
      date: bookingData.date,
    });
  
    newBooking.save((err, savedBooking) => {
      if (err) {
        console.error('Error saving booking:', err);
        res.status(500).send('Error saving booking');
      } else {
        res.status(201).json(savedBooking);
      }
    });
  });

app.listen(3000, () => console.log('Server running on localhost:3000'))